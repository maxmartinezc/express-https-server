export interface IServer {
  port: number;
  bootstrap: () => Promise<void>;
  listen: () => void;
}
