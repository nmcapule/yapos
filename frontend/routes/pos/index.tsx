import type { PageProps, Handlers } from "$fresh/server.ts";
import { pocketbase } from "@/utils/pocketbase.ts";

interface Data {
  items: Record<string, any>[];
  user: Record<string, any>;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const pb = pocketbase(req);
    const records = await pb.collection("items").getFullList(100, {
      sort: "-created",
    });
    return ctx.render({
      items: records.map((record) => ({
        ...record,
        imageUrl: new URL(pb.getFileUrl(record, record.image)),
      })),
      user: pb.authStore.model,
    });
  },
};

export default function Index({ data }: PageProps<Data>) {
  return (
    <div class="flex flex-wrap items-center justify-center gap-2 p-2 w-[35rem] bg-indigo-100 rounded">
      {data.items.map((item) => (
        <button
          class="bg-indigo-400 text-white rounded p-2 w-32 h-32 active:bg-indigo-600 focus:bg-indigo-500"
          className={`bg-[url('${item.imageUrl}')]`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
