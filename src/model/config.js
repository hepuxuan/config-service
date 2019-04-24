const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  application: { type: String, required: true },
  key: { type: String, required: true },
  value: { type: Schema.Types.Mixed, required: true },
  isPublic: { type: Boolean, required: true }
});

module.exports = {
  config: mongoose.model("Config", ConfigSchema)
};
