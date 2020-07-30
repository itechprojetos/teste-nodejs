import mongoose from 'mongoose';

const CandidateSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  skype: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String },
  city: { type: String, required: true },
  uf: { type: String, required: true },
  portfolio: { type: String },
  available_time: {
    type: String,
    enum: ['1', '2', '3', '4', '5'],
    required: true,
  },
  work_hour: {
    type: String,
    enum: ['1', '2', '3', '4', '5'],
    required: true,
  },
  hourly_salary: { type: Number },
  abilities: {
    javascript: {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    nodejs: {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    reactjs: {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    express: {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    mongodb: {
      type: String,
      enum: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    aditional: { type: String }
  },
  link: { type: String }
}, { timestamps: true });

export default mongoose.model('Candidate', CandidateSchema);
