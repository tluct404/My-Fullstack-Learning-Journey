'use client';

import { useState } from 'react';
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
  const [query, setQuery] = useState('');

  const visible = squad.filter((swimmer) => 
    swimmer.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="page">
      <h1>My Squad</h1>

      <input 
        className="search"
        type="text" 
        placeholder="Search by name: "
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {/* Render one SwimmerCard per swimmer. Same component, different data. */}
      <div className="squad">
        {visible.map((swimmer) => (
          <SwimmerCard swimmer={swimmer} key={swimmer.name} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className='empty'>No swimmers match &quot;{query}&quot;.</p>
      )}
    </main>
  );
}