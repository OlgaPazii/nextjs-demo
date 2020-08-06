import tableService from '../../src/services/tableService';

export default (req, res) => {
  tableService.once('update', () => {
    res.json(tableService.deck);
  });
}