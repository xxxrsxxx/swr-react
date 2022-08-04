import { rest } from "msw";

export const handlers = [
  rest.get("mock", (req, res, ctx) => {
    return res(
      ctx.json({
        key: "key",
        list: [
          {
            id: 0,
            label: "label",
          },
        ],
      })
    );
  }),
];
