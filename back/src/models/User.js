const { DataTypes } = require('sequelize');

// ! Sequelize es la instancia que recibe
module.exports = (sequelize) => {
// ! A partir de esa instancia definimos al modelo   
   sequelize.define('User', {
      // ! Atributos
      id: {
         type: DataTypes.INTEGER, // ! Tipo de dato
         allowNull: false, // ! Constraist
         primaryKey:true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      },
   }, { timestamps: false }); // ! Propiedad para eliminar los campos default create, update
};
