import { Router, Request, Response } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';


const specificationsRoutes = Router();

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return listSpecificationController.handle(request,response)
});

specificationsRoutes.post("/", (request: Request, response: Response) => {
 return createSpecificationController.handle(request,response)
});



export { specificationsRoutes }
