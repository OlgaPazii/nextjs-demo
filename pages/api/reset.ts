import tableService from '../../src/services/tableService';

export default (req, res) => {
  tableService.reset();
  res.end('OK');
}