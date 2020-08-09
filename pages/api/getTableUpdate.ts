export default (req, res) => {
  const url = (process.env.LONGPOLLER_URL || 'http://localhost:5000') + '/waitForUpdate';
  res.writeHead(302, {
    // Location: 'https://longpoller.herokuapp.com/wait'
    Location: url,
  });
  res.end();
}