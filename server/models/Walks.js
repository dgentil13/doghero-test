const mongoose = require('mongoose');

const { Schema } = mongoose;

const walkSchema = new Schema(
  {
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    days: [{ type: String, required: true }],
    time: { type: Number, required: true },
    address: { type: String, required: true },
    // confirmationCode: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    walker: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Pending', 'Confirmed'] },
    // dogs: [{ type: Schema.Types.ObjectId, ref: 'Dogs' }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Walks = mongoose.model('Walks', walkSchema);
module.exports = Walks;
