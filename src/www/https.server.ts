import https from "https";
import cors from "cors";
import { HttpServer } from "./http.server";
import devCerts = require("office-addin-dev-certs");

export class HttpsServer extends HttpServer {
  async listen() {
    const options = await devCerts.getHttpsServerOptions();
    const server = https.createServer(options, this.framework);
    server.listen(this.port, () => {
      console.log(`[HTTPS] Cors enabled: *`);
      console.log(`[HTTPS] Server started at port: ${this.port}`);
    });
  }

  protected loadMiddlewares() {
    return [...super.loadMiddlewares(), cors()];
  }
}
