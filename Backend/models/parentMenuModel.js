// models/parentMenuModel.js
const mongoose = require('mongoose');

const parentMenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  submenus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submenu' }],
});

module.exports = mongoose.model('ParentMenu', parentMenuSchema);
