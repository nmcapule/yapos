import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getCookies } from "std/http/cookie.ts";

import Counter from "../islands/Counter.tsx";

interface Data {
  isAllowed: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render({ isAllowed: cookies.auth === "bar" });
  },
};

function Login() {
  return (
    <form method="post" action="/api/login">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function Home({ data }: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <pre>{JSON.stringify(data)}</pre>
        {data.isAllowed ? (
          <p>
            You are logged in. <a href="/logout">Logout</a>
          </p>
        ) : (
          <Login />
        )}
        <Counter start={3} />
      </div>
    </>
  );
}
