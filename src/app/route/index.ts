import { Router } from "express";
import { PropertiesRoute } from "../modules/properties/properties.route";
const router = Router();

const moduleRoutes = [
  {
    path: "/properties",
    route: PropertiesRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
