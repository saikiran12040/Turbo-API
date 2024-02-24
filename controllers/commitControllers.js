const Commit = require("../models/gitCommits");
const mongoose = require("mongoose");

// create operation for commits

const createCommit = async (req, res) => {
  try {
    req.body.timestamp = new Date().getTime();
    const createCommit = new Commit(req.body);
    const commit = await createCommit.save();
    res.status(200).send(commit);
  } catch (err) {
    res.status(500).send(err);
  }
};

// read operation for commits

const readCommit = async (req, res) => {
  try {
    const query = {
      yourTimeField: {
        $gte: fromTime,
        $lt: tillTime,
      },
    };
    const commit = await Commit.find(query);
    res.json(commit);
  } catch (err) {
    res.status(500).send(err);
  }
};

// update operation for commits

const updateCommit = async (req, res) => {
  try {
    const commit = await Commit.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!commit) {
      return res.status(404).json({ error: "commit is not present" });
    }
    res.status(200).send(commit);
  } catch (err) {
    res.status(500).send({ message: "some error occured" });
  }
};

// delete operation for commits

const deleteCommit = async (req, res) => {
  try {
    const commit = await Commit.findByIdAndDelete({ _id: req.params.id });
    if (!commit) {
      return res.status(404).json({ error: "commit is not found" });
    }
    res.status(200).send(commit);
  } catch (err) {
    res.status(500).send({ message: "some error occured" });
  }
};

module.exports = {
  createCommit,
  readCommit,
  updateCommit,
  deleteCommit,
};
