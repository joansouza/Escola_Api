import Sequelize, { Model } from 'sequelize';
import bcrypyjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter de 3-255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 20],
            msg: 'senha deve ter de 6-20 caracteres',
          },
        },
      },
    }, { sequelize });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypyjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypyjs.compare(password, this.password_hash);
  }
}
