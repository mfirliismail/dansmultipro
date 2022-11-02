const { users, Sequelize } = require("../models");
const db = require("../models");
// const sequelize = require("sequelize");
// const sequelize = require("sequelize");
const axios = require("axios");
const { QueryTypes, QueryInterface } = require("sequelize");
const jwt = require("jsonwebtoken");
module.exports = {
  createUser: async (req, res) => {
    try {
      const createUsers = await users.create({ ...req.body, returning: true });
      return res.status(200).json({
        status: "success",
        message: "success create users",
        data: createUsers,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
  validateUser: async (req, res) => {
    try {
      const findUser = await users.findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });

      if (!findUser) {
        return res.status(404).json({
          status: "failed",
          message: "wrong email or password",
        });
      }

      const payload = {
        id: findUser.id,
        email: findUser.email,
      };

      const token = jwt.sign(payload, "secret_key");

      return res.status(200).json({
        status: "success",
        message: "success validate",
        data: token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const findUsers = await users.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!findUsers) {
        return res.status(404).json({
          status: "failed",
          message: "user not found with id" + req.params.id,
        });
      }

      const updateUser = await users.update(
        {
          ...req.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      return res.status(200).json({
        status: "success",
        message: "success update data",
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
  getOneUsers: async (req, res) => {
    try {
      const findUsers = await users.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!findUsers) {
        return res.status(404).json({
          status: "failed",
          message: "user not found with id" + req.params.id,
        });
      }

      return res.status(200).json({
        status: "success",
        message: "success find user",
        data: findUsers,
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const findUsers = await users.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!findUsers) {
        return res.status(404).json({
          status: "failed",
          message: "user not found with id" + req.params.id,
        });
      }

      const deleteUser = await users.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        status: "success",
        message: "success delete user",
        data: [],
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const findUsers = await users.findAll();

      return res.status(200).json({
        status: "success",
        message: "success find all user",
        data: findUsers,
      });
    } catch (error) {
      return res.status(500).json({
        status: "failed",
        message: "internal server error",
        error: error.message,
      });
    }
  },
};
