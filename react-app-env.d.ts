declare module "stream" {
  import { Stream } from "stream-browserify";
  export = Stream;
}

declare module "buffer" {
  export const Buffer: typeof import("buffer").Buffer;
}
