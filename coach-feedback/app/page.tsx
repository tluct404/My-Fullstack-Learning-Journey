// FILE LOCATION: app/page.tsx  (replace the whole file with this)

import SwimmerCard from '@/components/SwimmerCard';
import { Swimmer } from '@/types';

// A typed array — every item must match the Swimmer shape.
const squad: Swimmer[] = [
  {
    name: "Ava Chen",
    age: 14,
    events: ["50m Free", "100m Free", "100m Fly"],
    goal: "Break 30s in the 50m freestyle",
  },
  {
    name: "Ben Ortiz",
    age: 11,
    events: ["100m Back"],
    // no goal yet — and that's allowed, because goal is optional
  },
  {
    name: "Chloe Kim",
    age: 16,
    events: ["200m IM", "400m Free"],
    goal: "Qualify for regionals",
  },
];

export default function Home() {
  return (
    <main className="page">
      <h1>My Squad</h1>

      {/* Render one SwimmerCard per swimmer. Same component, different data. */}
      <div className="squad">
        {squad.map((swimmer) => (
          <SwimmerCard swimmer={swimmer} key={swimmer.name} />
        ))}
      </div>
    </main>
  );
}