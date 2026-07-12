// FILE LOCATION: types.ts  (in your project root, next to package.json)
//
// The same Swimmer shape from Part 3, now exported so BOTH the page and
// the SwimmerCard component can import and share it — one shape, reused.

export interface Swimmer {
  name: string;
  age: number;
  events: string[];
  goal?: string;      // optional — a new swimmer might not have one yet
}