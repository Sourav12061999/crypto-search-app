import search from "../../Schema/search.schema";
import connect from "../../dbConnect";

connect();
export default async function handler(req, res) {
  try {
    let data = await search
      .find({ id: new RegExp(req.query.search.toLowerCase()) })
      .lean()
      .exec();
    res.status(200).json(
      data.map((el) => {
        return {
          id: el.id,
          image: el.image,
          name: el.name,
        };
      })
    );
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}
