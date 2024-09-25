const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');


router.get('/', async (req, res) => {
    const customers = await Customer.findAll();
    const plainCustomers = customers.map(customer => customer.get({ plain: true })); // Convert to plain objects
    res.render('consulta', { customers: plainCustomers });
  });

router.get('/add', (req, res) => {
  res.render('cadastro');
});


router.post('/add', async (req, res) => {
  const { name, endereco, bairro, cep, cidade, estado } = req.body;
  await Customer.create({ name, endereco, bairro, cep, cidade, estado });
  res.redirect('/customers');
});


router.get('/edit/:id', async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    res.render('editar', { customer: customer.get({ plain: true }) }); 
  });


router.post('/edit/:id', async (req, res) => {
  const { name, endereco, bairro, cep, cidade, estado } = req.body;
  await Customer.update({ name, endereco, bairro, cep, cidade, estado }, {
    where: { id: req.params.id }
  });
  res.redirect('/customers');
});


router.get('/delete/:id', async (req, res) => {
  await Customer.destroy({ where: { id: req.params.id } });
  res.redirect('/customers');
});

module.exports = router;
