const { Router } = require('express');
const app = Router();

const Lists = require("../controllers/lists/lists")

app.get('/lists', Lists.index);
app.get('/lists/:id', Lists.find);
app.post('/lists/', Lists.create);
app.put('/lists/:id', Lists.replace);
app.delete('/lists/:id', Lists.delete);
app.get('/lists/:id/cards', Lists.findCard);
app.get('/lists/:id/cards/:cardId', Lists.findIdCard)
app.post('/lists/:id/cards', Lists.createCard)
app.put('/lists/:id/cards/:cardId', Lists.replaceCard)
app.delete('/lists/:id/cards/:cardId', Lists.deleteCard)

module.exports = app;
