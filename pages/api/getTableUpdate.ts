export default (req, res) => {

  res.writeHead(302, {
    // Location: 'https://longpoller.herokuapp.com/wait'
    Location: process.env.LONGPOLLER_URL || 'http://localhost:5000/wait',
  });
  res.end();
}