import { Router, Request, Response } from "express";

import { Category } from "../model/Category";
import { CategoriesRepository} from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list()

  return response.json(all);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if(categoryAlreadyExists) {
    return response.status(400).json({error: "Category Already Exists!"})
  }

  categoriesRepository.create({name, description})

  return response.status(201).json({name, description});
});

export { categoriesRoutes };
