export default async (req, res) => {
  const url = (process.env.LONGPOLLER_URL || 'http://localhost:5000') + '/getData';
  res.writeHead(302, {
    // Location: 'https://longpoller.herokuapp.com/wait'
    Location: url,
  });
  res.end();
}