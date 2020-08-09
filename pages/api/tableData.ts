import tableService from '../../src/services/tableService';

export default (req, res) => {
  res.json(tableService.getData());
}