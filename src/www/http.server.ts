import express from "express";
import { apiRouter } from "./api.router";
import { IServer } from "./server.interface";

export class HttpServer implements IServer {
  port: number;
  protected framework: express.Application;
  constructor(port: number) {
    this.port = port;
    this.framework = express();
  }

  async bootstrap(): Promise<void> {
    // Load Express Middlewares
    this.framework.use(this.loadMiddlewares());

    // Routers
    this.framework.use(apiRouter());
  }

  async listen(): Promise<void> {
    this.framework.listen(this.port, () => {
      console.log(`[HTTP] Server started at port: ${this.port}`);
    });
  }

  protected loadMiddlewares() {
    return [express.json()];
  }
}
