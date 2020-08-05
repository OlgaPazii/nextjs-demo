import nextConnect from 'next-connect';
import middleware from '../../middleware/mongo';
import tableMiddleware from '../../middleware/tables';

/**
 * @param {*} req
 * @param {import("next").NextApiResponse} res
 */
const statusGetHandler = async (req, res) => {
  console.log(req.query);

  const doc = await req.db.collection('products').findOne();
  console.log(doc);
  console.log(req.lobby);
  res.json(req.lobby);
}

const handler = nextConnect();

handler.use(middleware);
handler.use(tableMiddleware);
handler.get(statusGetHandler);


export default handler;


