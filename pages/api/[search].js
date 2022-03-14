import search from "../../Schema/search.schema";
import connect from "../../dbConnect";

connect();
export default async function handler(req, res) {
  try {
    let data = await search
      .find({ id: new RegExp(req.query.search.toLowerCase()) })
      .lean()
      .exec();
    res.status(200).json({
      id: data.id,
      name: data.name,
      image: data.image,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}
