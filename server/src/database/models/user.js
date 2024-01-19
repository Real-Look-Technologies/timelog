'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    validPassword(password) {
      return bcrypt.compare(password, this.senha);
    }
  }
  User.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: 'O campo nome deve ter no minimo 3 caracteres!'
        },
        notNull: {
          msg: 'O campo nome deve ser preenchido!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato de email invalido!'
        },
        notNull: {
          msg: 'O campo email deve ser preenchido!'
        }
      }
    },
    senha: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'O campo senha deve ser preenchido!'
        }
      }
    }, 
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'O campo cpf deve ser preenchido!'
        },
        len: {
          args: [1, 11],
          msg: 'O campo cpf deve ter no minimo 1 digito!'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });


  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.senha = await bcrypt.hash(user.senha, salt);
  });


  return User;
};