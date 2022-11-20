import { JSX } from "preact";
import { Item } from "@/models/pocketbase.ts";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  item: Item;
  count: number;
}

export default function PointOfSale(props: Props) {
  return (
    <button
      {...props}
      type="button"
      class="bg-indigo-400 text-white rounded p-2 w-32 h-32 active:bg-indigo-600 focus:bg-indigo-500"
    >
      {props.item.label} - {props.count}
      {props.children}
    </button>
  );
}
