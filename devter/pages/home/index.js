import AppLayout from '@/components/AppLayout';
import Devit from '@/components/Devit';
import { useState, useEffect } from 'react';
import useUser from '@/hooks/useUser';
import { fetchLatestDevits } from '@/firebase/client';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline);
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ id, userName, avatar, content, userId, createdAt }) => (
              <Devit
                key={id}
                id={id}
                createdAt={createdAt}
                userName={userName}
                avatar={avatar}
                content={content}
                userId={userId}
              />
            ),
          )}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          border-bottom: 1px solid #eee;
          background: #ffffffee;
          backdrop-filter: blur(5px);
          height: 49px;
          position: sticky;
          width: 100%;
          top: 0;
          align-items: center;
          display: flex;
        }

        h2 {
          font-weight: 700;
          font-size: 21px;
          padding-left: 15px;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          width: 100%;
          position: sticky;
          height: 49px;
        }
      `}</style>
    </>
  );
}
