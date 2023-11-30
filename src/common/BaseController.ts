import { type Express } from "express";

export class BaseController {
  protected app: Express;
  protected basePath = "/api";
  protected BASE_LANGUAGE = "en";

  constructor(app: Express) {
    this.app = app;
  }
}
