
const express = require('express');
const router = express.Router();
const Article = require('../models/article')

/**
 * Descripcion: en la ruta inicial de los articulos
 * {req} este es el req de la petecion
 * return: retorna los articulos encontrados en base de datos
 */
router.get('/', async (req, res) => {
    const article = await Article.find();
    return res.json(article);
});
/**
* Descripcion: busqueda por id
* {req} este req requiere el id del articulo
* return: retorna estado de la peticion
*/
router.post('/', async (req, res) => {
    try {
        
        const { reference, name, price } = req.body;
        const article = new Article({ reference, name, price });
        const newArticle = await article.save();
       
        return res.json({ status: 'article saved', response: newArticle });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'ha ocurrido un error' });
    }
});

/**
*  Descripcion: eliminando articulo de la base de datos
*  {req} este req solicita el id del articulo a eliminar
*/
router.delete('/:id', async (req, res) => {
    try {
        await Article.findByIdAndRemove(req.params.id);
        return res.json({ status: 'articule aliminated' });
    } catch (error) {
        return res.status(500).json({ error: 'ha ocurrido un error' });
    }
});
/**
*  Descripcion: actulizar articul
* {req} este es el req que solicida el id del articulo para ser actualizado
* return: retorna el articulo ya actualizado
* */
router.put('/:id', async (req, res) => {
    try {
        const { reference, name, price } = req.body;
        const newArticle = { reference, name, price };
        await Article.findByIdAndUpdate(req.params.id, newArticle);
        return res.json({ status: 'article updated' });
    } catch (error) {
        return res.status(500).json({ error: 'ha ocurrido un error' });
    }
});


module.exports = router;
