// models/submenuModel.js
const mongoose = require('mongoose');

const submenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parentMenu: { type: mongoose.Schema.Types.ObjectId, ref: 'ParentMenu', required: true },
});

module.exports = mongoose.model('Submenu', submenuSchema);
