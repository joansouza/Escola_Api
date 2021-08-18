import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'nome deve ter entre 4 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'sobrenome deve ter entre 4 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',

        unique: {
          msg: 'E-mail ja existe',
        },
        validate: {
          isEmail: {
            msg: 'email invalido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'peso precisa se num,ero inteiro ou ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'altura precisa se num,ero inteiro ou ponto flutuante',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'aluno_id' });
  }
}
