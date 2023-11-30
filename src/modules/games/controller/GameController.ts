import { type Express } from "express";
import { BaseController } from "../../../common/BaseController";
import { getGameByTitle } from "../service/GameService";

export class GameController extends BaseController {
  constructor(app: Express) {
    super(app);
    this.getGameByTitle();
  }

  private getGameByTitle = () => {
    this.app.get(`${this.basePath}/games/:title`, async (req, res) => {
      const response = await getGameByTitle(req.params.title);
      res.send(response.data);
    });
  };
}
