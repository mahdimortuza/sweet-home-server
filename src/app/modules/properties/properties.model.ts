import { Schema, model } from "mongoose";
import { TOwner, TProperty } from "./properties.interface";

const ownerSchema = new Schema<TOwner>({
  name: {
    type: String,
    trim: true,
    required: [true, "Owner name is required"],
  },
  image: {
    type: String,
    required: [true, "Owner Image is required"],
  },
  status: {
    type: String,
    enum: ["Seller", "Owner", "Agent"],
  },
});

const propertySchema = new Schema<TProperty>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      required: [true, "Property image is required"],
    },
    optImage1: {
      type: String,
    },
    optImage2: {
      type: String,
    },
    optImage3: {
      type: String,
    },
    video: {
      type: String,
    },
    bath: {
      type: Number,
      required: [true, "Bath number is required"],
    },
    toilet: {
      type: Number,
      required: [true, "Toilet number is required"],
    },
    price: {
      type: Number,
      required: [true, "Property price is required"],
    },
    kitchen: {
      type: String,
      enum: ["Yes", "No"],
      required: [true, "Kitchen is required"],
    },
    category: {
      type: String,
      enum: ["Residential", "Hostel"],
      required: [true, "Category is required"],
    },
    ratings: {
      type: Number,
      required: [true, "Rating is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: ["For sale", "For rent", "Sold Out", "Rented"],
      required: [true, "Status is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    owner: {
      type: ownerSchema,
      required: [true, "Owner info required"],
    },
    offer: {
      type: Number,
      required: [true, "Offer percentage is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Property = model<TProperty>("property", propertySchema);
