import { Handlers } from "$fresh/server.ts";
import { useState } from "preact/hooks";

import PoSItem from "@/components/pos/PoSItem.tsx";
import { Item } from "@/models/pocketbase.ts";

type Orders = Record<string, any>;

export interface Props {
  items: Item[];
}

export default function PointOfSale(props: Props) {
  const resetOrders = () =>
    props.items.reduce(
      (prev, curr) => ({ ...prev, [curr.id]: 0 }),
      {} as Orders
    );
  const totalPrice = (orders: Orders) =>
    props.items.reduce(
      (total, item) => total + (orders[item.id] ?? 0) * item.price,
      0
    );
  const reviewOrders = (e: Event, orders: Orders) => {
    const ok = confirm(
      `Confirm order and payment of ₱${totalPrice(
        orders
      )}?\n\nOrdered Items:\n` +
        props.items
          .filter((item) => Boolean(orders[item.id]))
          .map(
            (item) =>
              `  ${orders[item.id]}x ${item.label} : ₱${
                item.price * orders[item.id]
              }`
          )
          .join("\n")
    );
    if (!ok) e.preventDefault();
  };

  const [orders, setOrders] = useState(resetOrders());

  return (
    <form
      method="post"
      action="/pos"
      class="h-screen flex flex-col bg-gray-100 max-w-prose justify-between"
    >
      <div class="flex flex-wrap justify-center content-start gap-2 p-2">
        {props.items.map((item) => (
          <PoSItem
            item={item}
            count={orders[item.id]}
            onClick={() =>
              setOrders({ ...orders, [item.id]: orders[item.id] + 1 })
            }
          >
            <input
              type="hidden"
              id={item.id}
              name={item.id}
              value={orders[item.id]}
            />
          </PoSItem>
        ))}
      </div>
      <div class="flex w-full">
        <button
          class="bg-green-500 flex-grow p-6 text-white text-xl font-bold disabled:bg-gray-400"
          disabled={totalPrice(orders) === 0}
          type="submit"
          onClick={(e: Event) => reviewOrders(e, orders)}
        >
          Pay ₱{totalPrice(orders).toFixed(2)}
        </button>
        <button
          class="bg-gray-600 flex-grow p-6 text-white text-xl"
          type="reset"
          onClick={() => setOrders(resetOrders())}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
