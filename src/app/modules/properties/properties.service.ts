import { TProperty } from "./properties.interface";
import { Property } from "./properties.model";

const createPropertyIntoDb = async (payload: TProperty) => {
  const result = await Property.create(payload);
  return result;
};

const getAllPropertiesFromDb = async (filters: any) => {
  let query = Property.find();

  if (filters.category) {
    query = query.where("category").equals(filters.category);
  }
  if (filters.title) {
    query = query.where("title").equals(filters.title);
  }

  const result = await query.exec();
  return result;
};

const getSinglePropertyFromDb = async (id: string) => {
  const result = await Property.findById(id);
  return result;
};

const updateSinglePropertyIntoDb = async (id: string, payload: TProperty) => {
  const result = await Property.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSinglePropertyFromDb = async (id: string) => {
  const result = await Property.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const PropertyServices = {
  createPropertyIntoDb,
  getAllPropertiesFromDb,
  updateSinglePropertyIntoDb,
  deleteSinglePropertyFromDb,
  getSinglePropertyFromDb,
};
