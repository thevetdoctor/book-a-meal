import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const meals = (req, res) => {
  res.end(`<h1> Check out Book-A-Meal, and let's give you a sumptuous experience!</h1>
  <h2> Check out Book-A-Meal, and let's give you a sumptuous experience!</h2>
  <h3> Check out Book-A-Meal, and let's give you a sumptuous experience!</h3>
  <h4> Check out Book-A-Meal, and let's give you a sumptuous experience!</h4>`);
};

app.get('/meals', meals);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
// res.json({name: `Welcome to Book-A-Meal ...Your satisfaction is much assured!`});
  res.end('<h1> Welcome to Book-A-Meal </h1> <h3>...Your satisfaction is much assured! </h3>');
});

app.listen(port, () => {
//  console.log('Server started at port ${port} for Book-A-Meal App!');
});


export default app;
