import { Router, Request, Response, NextFunction } from "express";
import generatePdf from "../../service/pdf.service";
import path from "path";

const route: Router = Router();

export default (app: Router): void => {
  app.use("/pdf", route);

  route.post(
    "/generate",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const archivo  = req.body;

        if (!archivo) {
          return res.status(400).json({ error: "Missing 'archivo' in the request body" });
        }

        const pdf = await generatePdf({ archivo });

        res.contentType("application/pdf");
        res.send(pdf);
      } catch (err) {
        next(err);
      }
    }
  );
  console.log(__dirname);

  route.get(
    "/download",
    async (req: Request, res: Response, next: NextFunction) => {

      try {
      const file = path.join(__dirname, "..","..", "output.pdf");

      console.log("Directorio de Trabajo Actual:", process.cwd());

      res.download(file)
      
      } catch (err) {
        next(err);
      }
    }
  );

 
};
