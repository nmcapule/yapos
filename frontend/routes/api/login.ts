import { Handlers } from "$fresh/server.ts";
import PocketBase from "pocketbase";

export const handler: Handlers = {
  async POST(req) {
    // const url = new URL(req.url);
    const form = await req.formData();

    const pb = new PocketBase("http://127.0.0.1:8090");

    pb.authStore.loadFromCookie(req.headers.get("cookie") as string);
    console.log(pb.authStore.model);

    if (pb.authStore.isValid) {
      return new Response("you are already logged in", {
        status: 200,
      });
    }

    await pb
      .collection("users")
      .authWithPassword(
        form.get("username") as string,
        form.get("password") as string
      );
    const headers = new Headers();
    headers.set("set-cookie", pb.authStore.exportToCookie());
    headers.set("location", "/");

    return new Response(null, { status: 303, headers });
  },
};
