import { Exercise } from "../interfaces/models";
import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

type WorkoutProps = {
  workout: Exercise[];
  id: string;
};
export default function Workout({ workout, id }: WorkoutProps) {
  return (
    !!workout.length && (
      <SectionWrapper
        id={id}
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
