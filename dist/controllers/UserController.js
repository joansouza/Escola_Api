"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log('user id', req.userId);
      console.log('user email', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['user não existe'],
        });
      }

      const newData = await user.update(req.body);
      const { id, nome, email } = newData;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['user não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
