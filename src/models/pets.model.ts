import { Document, model, Schema, Types } from 'mongoose';
import { EPetSex, EPetSize, EPetStatus, EPetType, Pet } from '@interfaces/pets.interface';
import customerModel from '@models/customers.model';
import userModel from '@models/users.model';

const petSchema: Schema = new Schema<Pet>({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: customerModel,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: userModel,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(EPetType),
  },
  breed: {
    type: String,
    required: true,
  },
  birthDate: Date,
  sex: {
    type: String,
    enum: Object.values(EPetSex),
  },
  img: String,
  weight: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: EPetSize.M,
    enum: Object.values(EPetSize),
  },
  status: {
    type: String,
    default: EPetStatus.Active,
    enum: Object.values(EPetStatus),
  },
});

const petModel = model<Pet & Document>('Pet', petSchema);

export default petModel;
