import AppLayout from '@/components/AppLayout';
import Devit from '@/components/Devit';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, content, date }) => (
            <Devit
              key={id}
              id={id}
              username={username}
              avatar={avatar}
              content={content}
              date={date}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          border-bottom: 1px solid #eee;
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
        }

        section {
          padding-top: 49px;
        }

        nav {
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
