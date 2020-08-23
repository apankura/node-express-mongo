const Customer = require("../database/models/customer.model");

exports.getCustomers = function(req, res) {
  if (!req.session.user) {
    res.sendStatus(401);
  } else {
    Customer.find({}, (error, customers) => {
      if (error || customers === null) {
        res.sendStatus(404);
      } else {
        res.json(customers);
      }
    });
  }
};

exports.addCustomer = (req, res) => {
  if (!req.session.user) {
    res.sendStatus(401);
  } else {
    const { name, avatar } = req.body;
    new Customer({ name, avatar }).save((error, customer) => {
      if (error) {
        res.sendStatus(500);
      } else {
        res.json(customer);
      }
    });
  }
};
