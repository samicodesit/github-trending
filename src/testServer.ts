import { rest } from "msw";
import { setupServer } from "msw/node";

import { API_URL } from "./utils/constants";

const server = setupServer(
  rest.get(API_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [],
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
