import mongoose, { Schema, model } from "mongoose";
const arrayRequired = {
  type: Array,
  required: true,
};

const schema = new Schema({
  ticker: arrayRequired,
});

export default mongoose.models.ticker || model("ticker", schema);
