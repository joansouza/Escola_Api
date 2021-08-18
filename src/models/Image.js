import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Image extends Model {
  static init(sequelize) {
    super.init({
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'campo não pode ficae vazio',
          },
        },
      },

    }, { sequelize, tableName: 'fotos' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
