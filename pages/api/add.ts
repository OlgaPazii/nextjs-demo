import tableService from '../../src/services/tableService';

export default (req, res) => {
  const { rank, suit } = req.query;
  tableService.addCard({ rank, suit });
  res.end('OK');
}