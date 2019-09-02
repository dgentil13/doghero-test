const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    number: { type: Number, required: true },
    profileImg: { type: String, default: ' ' },
    address: { type: String, default: ' ' },
    role: { type: String, enum: ['Client', 'Walker'] },
    dogs: [{ type: Schema.Types.ObjectId, ref: 'Dog' }],
    walks: [{ type: Schema.Types.ObjectId, ref: 'Walks' }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const User = mongoose.model('User', userSchema);
module.exports = User;
