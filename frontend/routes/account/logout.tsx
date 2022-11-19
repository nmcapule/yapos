import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "std/http/cookie.ts";

export const handler: Handlers = {
  GET(req) {
    const params = new URLSearchParams(req.headers.get("cookie")!);
    console.log(params);

    const headers = new Headers();
    deleteCookie(headers, "pb_auth", { path: "/" });
    headers.set("location", "/");

    console.log(headers);
    return new Response(null, { status: 302, headers });
  },
};
