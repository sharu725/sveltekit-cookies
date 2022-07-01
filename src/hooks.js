import { parse } from "cookie";

export async function handle({ event, resolve }) {
  const cookies = event.request.headers.get("cookie");
  const parsedCookies = parse(cookies);
  // do something with cookies

  const response = await resolve(event);
  return response;
}

export const getSession = ({ request }) => {
  const cookies = request.headers.get("cookie");
  const parsedCookies = parse(cookies);
  
  return {
    cookies: parsedCookies,
  };
};
