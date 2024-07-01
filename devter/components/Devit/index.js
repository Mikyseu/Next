import Avatar from '@/components/Avatar';
import useTimeAgo from '@/hooks/useTimeAgo';

export default function Devit({ avatar, userName, content, createdAt, id }) {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> . </span>
            <date>{timeago}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          display: flex;
          padding: 8px 10px;
        }

        div {
          padding-right: 10px;
        }

        p {
          line.height: 1.3;
          margin: 0;
        }

        date {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
