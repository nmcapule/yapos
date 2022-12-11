// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/account/login.tsx";
import * as $2 from "./routes/account/logout.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/inventory/index.tsx";
import * as $5 from "./routes/pos/index.tsx";
import * as $6 from "./routes/pos/orders.tsx";
import * as $7 from "./routes/pos/review.tsx";
import * as $8 from "./routes/pos/success.tsx";
import * as $9 from "./routes/posx/index.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/PointOfSale.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/account/login.tsx": $1,
    "./routes/account/logout.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/inventory/index.tsx": $4,
    "./routes/pos/index.tsx": $5,
    "./routes/pos/orders.tsx": $6,
    "./routes/pos/review.tsx": $7,
    "./routes/pos/success.tsx": $8,
    "./routes/posx/index.tsx": $9,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/PointOfSale.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
