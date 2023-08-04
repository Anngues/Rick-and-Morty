// const users = require ('../utils/users')

// const login = (req, res) => {
//     const { email, password } = req.query
//     const access = false

//     users.forEach((user) => { 
//         user.email === email && user.password === password 
//         ? access = true
//         : null
//     })

//     return res.status(200).json({access})
// }

// module.exports = { login }

const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;

  // Utiliza la función 'find' para buscar el usuario correspondiente
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Si se encuentra el usuario, establece 'access' en true
    return res.status(200).json({ access: true });
  } else {
    // Si no se encuentra el usuario, establece 'access' en false
    return res.status(200).json({ access: false });
  }
};

module.exports = { login };
