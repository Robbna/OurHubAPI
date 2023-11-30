import { type Express } from "express";
import { BaseController } from "../../../common/BaseController";
import { getMovieByTitle } from "../service/MovieService";

export class MovieController extends BaseController {
  constructor(app: Express) {
    super(app);
    this.getMovieByTitle();
  }

  private getMovieByTitle = () => {
    this.app.get(`${this.basePath}/movies/:title`, async (req, res) => {
      const language = (req.query.language as string) || this.BASE_LANGUAGE;
      const response = await getMovieByTitle(req.params.title, language);
      res.send(response.data);
    });
  };
}
