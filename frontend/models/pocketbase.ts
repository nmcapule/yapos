export interface Item extends Record<string, any> {
  ['id']: string;
  ['sku']: string;
  ["unit_price"]: number;
}
