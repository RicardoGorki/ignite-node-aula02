import { Response, Request } from "express"

import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { categoriesRepository } from "./index"

class CreateCategoryController {
  constructor (private createCategoryUseCase: CreateCategoryUseCase){

  }
  handle (request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryUseCase(categoriesRepository)

    createCategoryService.execute({name, description})

    return response.status(201).json({name, description});
}
}

export { CreateCategoryController }
