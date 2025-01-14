import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export type Exercise = {
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
  workout: Exercise[];
};
export default function Workout({ workout }: WorkoutProps) {
  return (
    !!workout.length && (
      <SectionWrapper
        header="Yes you can do it!"
        title="This is your selected workout"
      >
        <div className="flex flex-col gap-4">
          {workout.map((exercise, index) => {
            return (
              <ExerciseCard key={index} index={index} exercise={exercise} />
            );
          })}
        </div>
      </SectionWrapper>
    )
  );
}
