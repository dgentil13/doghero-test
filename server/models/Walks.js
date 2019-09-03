const mongoose = require('mongoose');

const { Schema } = mongoose;

const walkSchema = new Schema(
  {
    type: { type: String },
    duration: { type: String },
    days: [{ type: String }],
    time: { type: String },
    address: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    walker: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Pending', 'Confirmed'] },
    dogs: { type: Array },
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
