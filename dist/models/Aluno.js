"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'nome deve ter entre 4 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'sobrenome deve ter entre 4 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'peso precisa se num,ero inteiro ou ponto flutuante',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
