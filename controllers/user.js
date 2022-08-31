const User = require("../models/users");

// @desc    Get all users
// @api     Get /api/v1/users
// @access  public

exports.getUsers = async (req, res, next) => {
  User.find()
    .then((result) => {
      res.status(200).send({ success: true, result });
      console.log(result);
    })
    .catch((err) => {
      res.status(500).json({ response: err });
    });
};

// @desc     Get user
// @api      Get /api/v1/user
// @access   public

exports.getUser = async (req, res, next) => {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((result) => {
      res.status(201).json({ student: result });
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

// @desc    Create user
// @api     Create /api/v1/user
// @access  public

exports.createUser = async (req, res, next) => {
  console.log(req.body);
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res.status(201).json({ createdUser: newUser });
    })
    .catch((e) => {
      res.json(e);
    });
  console.log(e.message);
  // end the process

  res.end();
};

// @desc    delete user
// @api     delete /api/v1/user
// @access  public

exports.deleteUser = async (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(201).json({ deleteUser: result });
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};
// @desc    alter user
// @api     alter /api/v1/user
// @access  public

exports.updateUser = async (req, res, next) => {
  res.status(200).json({ success: true, msg: `Edit user ${req.params.id}` });
};
