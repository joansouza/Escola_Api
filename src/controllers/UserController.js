import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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

export default new UserController();
