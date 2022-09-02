const User = require("../models/users");

// @desc    Get all users
// @api     Get /
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
// @api      Get /{:id}
// @access   public

exports.getUser = async (req, res, next) => {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((result) => {
      if ((result = !null)) {
        result = "user not found";
      }
      res.status(201).json({ student: result });
      console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

// @desc    Create user
// @api     Post //{:id}
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
      // For email error
      if ((e.keyValue.name = !null)) {
        console.log("Name must be unique");
        res.status(200).send(`Name must be unique`);
      }
      // For name error
      else if ((e.keyValue.email = !null)) {
        res.status(500).send(`Email must be unique`);
        console.log("Email must be unique");
      }
      // For other error
      else {
        res.status(500).json({ error: e });
      }
    });
  // end process
  // res.end();
};

// @desc    delete user
// @api     delete /{:id}
// @access  public

exports.deleteUser = async (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(201).json({ deleteUser: result });
      console.log(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
// @desc    alter user
// @api     patch /{:id}
// @access  public

exports.updateUser = async (req, res, next) => {
  res.status(200).json({ success: true, msg: `Edit user ${req.params.id}` });
};
