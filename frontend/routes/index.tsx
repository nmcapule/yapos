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
        {data.authenticated ? (
          <p class="bg-gray-400 text-white p-4 rounded">
            You are logged in. <a href="/account/logout">Logout?</a>
          </p>
        ) : (
          <p class="bg-gray-500 text-white p-4 rounded">
            <a href="/account/login">Login</a>
          </p>
        )}
        <div class="flex flex-row">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <div class="p-2">
            <ul>
              <button class="p-2 bg-gray-600 text-white rounded w-32 h-32">
                <a href="/pos">Point of Sale</a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
