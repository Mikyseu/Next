import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Button from '@/components/Button';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';

import { addDevit } from '@/firebase/client';

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

export default function ComposeTweet() {
  const user = useUser();
  const [status, setstatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = event => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setstatus(COMPOSE_STATES.LOADING);
    addDevit({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        setstatus(COMPOSE_STATES.SUCCESS);
        router.push('/home');
      })
      .catch(error => {
        console.error('Error adding devit:', error);
        setstatus(COMPOSE_STATES.ERROR);
      });
  };

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="What are you thinking?"
          ></textarea>
          <div>
            <Button disabled={isButtonDisabled}>Deviting</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          div {
            padding: 15px;
          }

          textarea {
            border: 0;
            padding: 15px;
            min-height: 200px;
            outline: 0;
            font-size: 21px;
            resize: none;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
