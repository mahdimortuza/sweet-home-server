import express from "express";
import { PropertyController } from "./properties.controller";
const router = express.Router();

router.post("/create-property", PropertyController.createProperty);
router.get("/", PropertyController.getAllProperties);
router.get("/:id", PropertyController.getSingleProperty);
router.patch("/:id", PropertyController.updateSingleProperty);
router.delete("/:id", PropertyController.deleteSingleProperty);

export const PropertiesRoute = router;
