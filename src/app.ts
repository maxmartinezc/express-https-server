import { HttpServer } from "./www/http.server";
import { HttpsServer } from "./www/https.server";
import { IServer } from "./www/server.interface";

export class App {
  constructor(private server: IServer) {}
  async bootstrap(): Promise<void> {
    // framework bootstrapping
    await this.server.bootstrap();
  }

  async run(): Promise<void> {
    this.server.listen();
  }
}

const makeServerInstance = (port: number): IServer => {
  return process.env.ENABLE_HTTPS === "true"
    ? new HttpsServer(port)
    : new HttpServer(port);
};
async function start() {
  const port = 9001;
  const server = makeServerInstance(port);
  const app = new App(server);
  await app.bootstrap();
  await app.run();
}

start();
