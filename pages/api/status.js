import nextConnect from 'next-connect';
// import middleware from '../../middleware/mongo';

/**
 * @param {*} req
 * @param {import("next").NextApiResponse} res
 */
const statusGetHandler = async (req, res) => {
  const doc = await req.db.collection('products').findOne();
  res.json(doc);
}

const handler = nextConnect();

// handler.use(middleware);
handler.get(statusGetHandler);

export default handler;
