import type { PageProps, Handlers } from "$fresh/server.ts";
import { pocketbase } from "@/utils/pocketbase.ts";

import { Props, default as PointOfSale } from "@/islands/PointOfSale.tsx";

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
  async POST(req: Request, _ctx) {
    const form = await req.formData();
    const pb = pocketbase(req);

    const group = await pb.collection("order_groups").create();
    for (const [id, count] of form) {
      if (Number.parseInt(count as string) === 0) {
        continue;
      }
      await pb.collection("order_items").create({
        ["order_group"]: group.id,
        ["item"]: id,
        ["count"]: count,
      });
    }

    const headers = new Headers();
    headers.set("location", "/pos");
    return new Response(null, { status: 301, headers });
  },
};

export default function Index({ data }: PageProps<Props>) {
  return <PointOfSale items={data.items}></PointOfSale>;
}
