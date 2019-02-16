/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import meals from '../api/routes/meals';
import menus from '../api/routes/menus';
import orders from '../api/routes/orders';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('publicDirectory', path.join(__dirname, '/'));

console.log(publicDirectory);

app.use('/api/v1/meals', meals);
app.use('/api/v1/menus', menus);
app.use('/api/v1/orders', orders);


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
// res.json({name: `Welcome to Book-A-Meal ...Your satisfaction is much assured!`});
  res.end(`<h1> Welcome to Book-A-Meal </h1> <h3>...where your satisfaction is much assured! </h3>
            Check out our array of delicacies, and let's give you a sumptuous experience!`);
});

app.listen(port, () => {
  console.log(`Server started at port ${port} for Book-A-Meal App!`);
});


export default app;
