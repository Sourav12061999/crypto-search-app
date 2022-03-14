const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
});
let search = mongoose.models.searchs || mongoose.model("searchs", searchSchema);
export default search;
