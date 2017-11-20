const leadersController = require('../controllers').leaders;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/leader', leadersController.create)
  app.get('/api/leaders', leadersController.list)
  app.get('/api/allleaders', leadersController.all)
  app.put('/api/leaders/:id', leadersController.update);
};