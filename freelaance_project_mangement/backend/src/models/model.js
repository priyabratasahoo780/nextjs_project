import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minLength: 3
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('users', userSchema);

export default User;
