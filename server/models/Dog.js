const mongoose = require('mongoose');

const { Schema } = mongoose;

const dogSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String },
    picture: { type: String, default: '' },
    race: { type: String },
    age: { type: Number },
    size: { type: String },
    additionalInfo: { type: String },
    // owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;
