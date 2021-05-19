const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const db = new Sequelize('customer', 'root', 'Sairam3@', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = db.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  address: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
db.sync({
  force: true
})
  .then(() => {
    const jane = User.create(
      {
        firstName: "Priya",
        lastName: "Murugan",
        address: "Rjpm",
        age: 22,
      })
  })
  .catch((err) => console.log(err))

// db.authenticate()
//   .then(() => {
//     console.log('connection success')
//   })
module.exports - {
  db
}