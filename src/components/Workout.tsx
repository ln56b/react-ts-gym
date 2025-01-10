type Workout = {
  description: string;
  meta: { environment: string; equipment: string[]; level: number[] };
  muscles: string[];
  name: string;
  reps: number;
  rest: number;
  substitutes: string[];
  tempo: string;
  type: string;
  unit: string;
};

type WorkoutProps = {
  workout: Workout;
};
export default function Workout({ workout }: WorkoutProps) {
  return <div>Workout Component</div>;
}
