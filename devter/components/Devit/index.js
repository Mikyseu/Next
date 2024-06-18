import Avatar from '@/components/Avatar';

export default function Devit({ avatar, username, content, date, id }) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{content}</p>
          <p>{date}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eaf7ff;
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
      `}</style>
    </>
  );
}
