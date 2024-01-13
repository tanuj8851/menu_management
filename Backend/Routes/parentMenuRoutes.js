
const express = require('express');
const router = express.Router();
const ParentMenu = require('../models/parentMenuModel');

// Create a new parent menu
router.post('/create', async (req, res) => {
  try {
    const { name } = req.body;
    const parentMenu = new ParentMenu({ name });
    await parentMenu.save();
    res.status(201).json(parentMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all parent menus with their submenus
router.get('/all', async (req, res) => {
  try {
    const parentMenus = await ParentMenu.find().populate('submenus');
    res.status(200).json(parentMenus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
