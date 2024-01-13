const express = require("express");
const router = express.Router();
const Submenu = require("../models/submenuModel");

const ParentMenu = require("../models/parentMenuModel");

// Create a new submenu under a parent menu
router.post("/create", async (req, res) => {
  try {
    const { name, parentMenuId } = req.body;

    // Check if the parent menu exists
    const parentMenu = await ParentMenu.findById(parentMenuId);
    if (!parentMenu) {
      return res.status(404).json({ error: "Parent menu not found." });
    }

    const submenu = new Submenu({ name, parentMenu: parentMenuId });
    await submenu.save();

    // Update the parent menu's submenus array
    parentMenu.submenus.push(submenu._id);
    await parentMenu.save();

    res.status(201).json(submenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
