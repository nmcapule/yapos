import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth === "bar" });
  },
};

export default function Login() {
  return (
    <div class="flex h-screen v-screen items-center justify-center">
      <form method="post" action="/api/login" class="flex flex-col gap-1 w-96">
        <input
          type="text"
          name="username"
          placeholder="Username"
          class="bg-purple-100 focus:bg-purple-400 p-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="bg-purple-100 focus:bg-purple-400 p-4"
        />
        <button type="submit" class="bg-green-600 text-white p-4 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
