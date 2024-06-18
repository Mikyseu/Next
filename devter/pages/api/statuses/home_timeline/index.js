const timeline = [
  {
    id: '0',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    username: 'github',
    content: 'Hello World',
    date: '2021-01-01',
  },
  {
    id: '1',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    username: 'github',
    content: 'Hello World2',
    date: '2021-01-01',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeline));
};
