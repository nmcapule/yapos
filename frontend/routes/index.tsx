import type { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { pocketbase } from "@/utils/pocketbase.ts";

import Counter from "../islands/Counter.tsx";

interface Data {
  authenticated: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const pb = pocketbase(req);
    return ctx.render({ authenticated: pb.authStore.isValid });
  },
};

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
        {data.authenticated ? (
          <p class="bg-indigo-400 text-white p-4 rounded">
            You are logged in. <a href="/account/logout">Logout?</a>
          </p>
        ) : (
          <a href="/account/login">Login</a>
        )}
        <Counter start={3} />
      </div>
    </>
  );
}
