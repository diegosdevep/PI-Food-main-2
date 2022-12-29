const router = require('express').Router();
const { createReceta } = require('../controllers/createReceta');

// POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
router.post('/', async (req, res) => {
  try {
    const receta = req.body;
    const newReceta = await createReceta(receta);
    res.status(200).send(newReceta);
  } catch (err) {
    res.status(400).send({ msg: 'Error, no se pudo crear la receta', err });
  }
});

module.exports = router;
