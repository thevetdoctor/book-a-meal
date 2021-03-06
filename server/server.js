/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
// import path from 'path';
import meals from './api/routes/meals';
import menus from './api/routes/menus';
import orders from './api/routes/orders';
import users from './api/routes/users';
import { sequelize } from './api/models';
import seeders from './api/models/seeders';


const app = express();
const eraseDatabaseOnSync = true;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '/ui')));
app.use(express.static(__dirname.replace('server\\src', 'ui')));


app.use('/api/v1/meals', meals);
app.use('/api/v1/menus', menus);
app.use('/api/v1/orders', orders);
app.use('/auth/users/', users);


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname.replace('server\\src', 'ui\\index.html'));
});

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  // if (eraseDatabaseOnSync) {
    console.log('seeding DB');
    console.log(seeders);
    // eslint-disable-next-line no-unused-expressions
    seeders.seedObj();
  // }

  app.listen(port, () => {
    console.log(`Server started at port ${port} for Book-A-Meal App!`);
    console.log(__dirname.replace('server\\src', 'ui\\index.html'));
  });
});

export default app;
