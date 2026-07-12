import { Swimmer } from '@/types';

// The props this component accepts, typed with the Swimmer interface.
type SwimmerCardProps = {
  swimmer: Swimmer;
};

// A component is a function that returns UI (JSX).
// We pull "swimmer" straight out of the props with { swimmer }.
export default function SwimmerCard({ swimmer }: SwimmerCardProps) {
  return (
    <div className="card">

      {/* Header row: name on the left, age badge on the right */}
      <div className="card-header">
        <h2 className="name">{swimmer.name}</h2>
        <span className="age">Age {swimmer.age}</span>
      </div>

      {/* Turn the events array into one pill each with .map() */}
      <div className="events">
        {swimmer.events.map((event) => (
          <span className="event" key={event}>{event}</span>
        ))}
      </div>

      {/* Only render the goal line if a goal exists (optional field) */}
      {swimmer.goal && (
        <p className="goal"><strong>Goal:</strong> {swimmer.goal}</p>
      )}

    </div>
  );
}