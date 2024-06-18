import { useEffect, useState } from 'react';
import Head from 'next/head';
import AppLayout from '@/components/AppLayout';
import { colors } from '@/styles/theme';
import Button from '@/components/Button';
import GitHub from '@/components/Icons/GitHub';
import Avatar from '@/components/Avatar';

import {
  loginWithGitHub,
  onAuthStateChanged,
} from '@/components/Firebase/client';

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);
  const handleClick = () => {
    loginWithGitHub()
      .then(user => {
        const { avatar, username, url } = user;
        setUser({ username, avatar, url });
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/oblivionlogo(pau).png" alt="Logo" />
          <h1>Devter</h1>
          <h2>Talk about development with developers</h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  text={user.username}
                />
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 32px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 20px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
