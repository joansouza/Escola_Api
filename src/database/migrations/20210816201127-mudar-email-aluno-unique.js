module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('alunos', 'email',
      {
        type: Sequelize.STRING,
        allawNull: false,
        unique: true,
      });
  },

  down: async () => {},
};
