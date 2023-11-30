import { type Express } from "express";
import { BaseController } from "../../../common/BaseController";
import { getBookByTitle } from "../service/BookService";

export class BookController extends BaseController {
  constructor(app: Express) {
    super(app);
    this.getBookByTitle();
  }

  private getBookByTitle = () => {
    this.app.get(`${this.basePath}/books/:title`, async (req, res) => {
      const language = (req.query.language as string) || this.BASE_LANGUAGE;
      const response = await getBookByTitle(req.params.title, language);
      res.send(response.data);
    });
  };
}
