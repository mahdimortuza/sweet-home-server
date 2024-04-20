import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PropertyServices } from "./properties.service";

const createProperty = catchAsync(async (req, res) => {
  const property = req.body;
  const result = await PropertyServices.createPropertyIntoDb(property);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Property is created successfully",
    data: result,
  });
});

const getAllProperties = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const result = await PropertyServices.getAllPropertiesFromDb(filters);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Properties are retrieved successfully",
    data: result,
  });
});

const getSingleProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PropertyServices.getSinglePropertyFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Property is retrieved successfully",
    data: result,
  });
});

const updateSingleProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PropertyServices.updateSinglePropertyIntoDb(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Property is updated successfully",
    data: result,
  });
});

const deleteSingleProperty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PropertyServices.deleteSinglePropertyFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Property is deleted successfully",
    data: result,
  });
});

export const PropertyController = {
  createProperty,
  getAllProperties,
  getSingleProperty,
  updateSingleProperty,
  deleteSingleProperty,
};
