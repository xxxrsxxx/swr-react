import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "./handlers";

// mocking server 생성
export const server: SetupServerApi = setupServer(...handlers);
