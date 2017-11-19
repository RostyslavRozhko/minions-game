const Leader = require('../models').sale_leader
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const operatorsAliases = {
    $regexp: op.regexp,
    $or: op.or
}

module.exports = {
  create(req, res) {
    return Leader
      .create({
        city: req.body.city,
        name: req.body.name,
        position: req.body.position,
        year: req.body.year,
        month: req.body.month,
        percent: req.body.percent,
      })
      .then(leader => res.status(201).send(leader))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Leader
      .findById(req.params.id)
      .then(leader => {
        if (!leader) {
          return res.status(404).send({
            message: 'Leader Not Found',
          });
        }
        return leader
          .update({
            percent: req.body.percent || leader.percent,
          })
          .then(() => {
            res.io.emit('updatedLeader', {id: leader.id, percent: leader.percent})
            res.status(200).send(leader)
          })
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    let limit = 10
    let offset = 0
    Leader.findAndCountAll({
      where: req.query.q && {name: {
        $or: {
          $regexp: `${req.query.q}`,
          $regexp: `${req.query.q.charAt(0).toUpperCase() + req.query.q.slice(1)}`
        }
      }}
    })
    .then((data) => {
      let page = req.query.page || 1
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);
      Leader.findAll({
        where: req.query.q && {name: {
          $or: {
            $regexp: `${req.query.q}`,
            $regexp: `${req.query.q.charAt(0).toUpperCase() + req.query.q.slice(1)}`
          }
        }},
        attributes: ['id', 'city', 'name', 'position', 'year', 'month', 'percent'],
        order: req.query.sort && [['percent', 'DESC']],
        limit: limit,
        offset: offset,
      })
      .then((users) => {
        res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
      });
    })
    .catch(function (error) {
      res.status(500).send('Internal Server Error');
    });
  },
};