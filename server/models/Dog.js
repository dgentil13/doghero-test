const mongoose = require('mongoose');

const { Schema } = mongoose;

const dogSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ['Female', 'Male'] },
    // picture: { type: String, default: '' },
    race: { type: String, required: true },
    age: { type: String, required: true },
    size: { type: String },
    additionalInfo: { type: String },
    activeWalk: { type: Boolean },
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
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
