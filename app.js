const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');
const sequelize = require('./config/database');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine('handlebars', engine()); 
app.set('view engine', 'handlebars');


app.use(express.static('public'));


app.use('/customers', customerRoutes);


sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log('Database error: ' + err));
