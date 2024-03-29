const User = require('../../models/usermodel');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

exports.signup = (req, res) => {

  User.findOne({ email: req.body.email })
    .exec((error, user) => {
      if (user)
        return res.status(400).json({
          message: " Admin Alredy registered"
        });

      const {
        firstName,
        lastName,
        email,
        password,
      } = req.body;

      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username: Math.random().toString(),
        role: 'admin'
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: " message Something Went Wrong"
          });
        }

        if (data) {
          console.log(data, "datatatta")
          return res.status(201).json({
            user: data,
            message: "Admin created successfully "
          })
        }
      })
    })

}


exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((error, user) => {
      if (error)
        return res.status(400).json({ error });
      if (user) {
        if (user.authenticate(req.body.password) && user.role === 'admin') {
          const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2d' })
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.cookie('token', token, { expiresIn: '2h' });
          res.status(200).json({
            token,
            user: {
              _id, firstName, lastName, email, role, fullName
            }
          });


        } else {
          return res.status(400).json({ message: "Invalid Password" })
        }
      }
      else {
        return res.status(400).json({ message: "data is created" })
      }
    })

} 

exports.signout = (req, res) => {
    
  res.clearCookie('token')
  res.status(200).json({
    message: ' SignOut Successfully'
  })

}