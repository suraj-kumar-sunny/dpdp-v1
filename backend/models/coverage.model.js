import mongoose from 'mongoose'

const coverageSchema = new mongoose.Schema({
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
=======
  coverageCount: {
    type: Number,
    default: 0,
>>>>>>> Stashed changes
=======
  coverageCount: {
    type: Number,
    default: 0,
>>>>>>> Stashed changes
=======
  coverageCount: {
    type: Number,
    default: 0,
>>>>>>> Stashed changes
  },
  scoped: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scoped',
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    required: true
  }
=======
    default: null
  }
},{ timestamps: true
>>>>>>> Stashed changes
=======
    default: null
  }
},{ timestamps: true
>>>>>>> Stashed changes
=======
    default: null
  }
},{ timestamps: true
>>>>>>> Stashed changes
});

export const Coverage = mongoose.model('Coverage', coverageSchema);