import { parse } from "cookie";

export const get = async ({ request }) => {
  const cookies = request.headers.get("cookie");
  const parsedCookies = parse(cookies);

  return {
    body: parsedCookies,
  };
};
