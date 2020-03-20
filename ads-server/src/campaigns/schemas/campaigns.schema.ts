/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const CampaignsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  total_budget: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  platforms: {
    type: Object,
    required: true
  },
});