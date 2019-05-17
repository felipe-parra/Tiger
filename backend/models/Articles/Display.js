const mongoose = require('mongoose')

const displaySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    shortName: {
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Display', displaySchema)