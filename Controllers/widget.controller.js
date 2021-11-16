const db = require('../Models/index');

async function getAllWidgets(req, res) {
  try {
    const widgets = await db.Widget.find({}).select('name _id');
    res.send(widgets);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error', err);
  }
}

async function createWidget(req, res) {
  try {
    const widget = await db.Widget.create([{ ...req.body }], { new: true });
    console.log(widget);
    res.send(widget);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function getWidget(req, res) {
  try {
    const { id } = req.params;
    const widget = await db.Widget.findById(id);
    res.send(widget);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function removeWidget(req, res) {
  try {
    const { id } = req.params;
    const removed = await db.Widget.findByIdAndDelete(id);
    res.send(removed);
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error', err);
  }
}

async function updateWidget(req, res) {
  try {
    const { id } = req.params;
    const updated = await db.Widget.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updated);
    console.log(req.body);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error', err);
  }
}

module.exports = {
  getAllWidgets,
  getWidget,
  removeWidget,
  createWidget,
  updateWidget,
};
