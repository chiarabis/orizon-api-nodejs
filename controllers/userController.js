//i controller contengono la logica che gestisce le richieste HTTP; elaborano la richiesta ed interagiscono con i modelli
const { User } = require('../models');

// Funzione per ottenere tutti gli utenti
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Funzione per creare un nuovo utente
const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const newUser = await User.create({ firstname, lastname, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Funzione per aggiornare un utente esistente
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not update' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Funzione per cancellare un utente
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};