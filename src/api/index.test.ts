import useFetch, { $fetch } from ".";
import { server, rest } from "../testServer";
import { renderHook } from "@testing-library/react-hooks";

const mockParams = {
  q: "created:>2021-01-01",
  sort: "stars",
  order: "des",
};

it("fetch wrapper responds correctly", async () => {
  const { items } = await $fetch(mockParams);

  expect(items).toEqual([]);
});

it("fetch wrapper handles failure", async () => {
  server.use(
    rest.get("https://api.github.com/search/repositories", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  await expect($fetch(mockParams)).rejects.toThrow("Server error.");
});

it("fetch hook returns correct data", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetch(mockParams));

  expect(result.current.response).toBe(null);
  await waitForNextUpdate();

  expect(result.current.response).toEqual({
    items: [],
  });
});
