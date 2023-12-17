import { Router } from 'express'; 
import pdf from './routes/pdf';

export default (): Router => {
  const app: Router = Router();

  pdf(app)

  return app;
};
