import { useState } from "react";
import { Exercise } from "./Workout";

type ExerciseCardProps = {
  exercise: Exercise;
  index: number;
};
export default function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const [completeWorkout, setCompleteWorkout] = useState<number>(0);

  function incrementExerciseCount() {
    setCompleteWorkout(() => (completeWorkout + 1) % 6);
  }

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="hidden text-3xl font-semibold sm:inline sm:text-4xl md:text-5xl text-slate-400">
          0{index + 1}
        </h4>
        <h2 className="flex-1 max-w-full text-lg capitalize truncate whitespace-nowrap sm:text-wl md:text-2xl sm:text-center">
          {exercise.name.replace(/[_]/g, " ")}
        </h2>
        <p className="text-sm capitalize text-slate-400">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-small">Trained muscles</h3>
        <p className="capitalize">{exercise.muscles.join(", ")}</p>
      </div>

      <div className="flex flex-col gap-2 rounded bg-slate-950">
        {exercise.description.split("___").map((description, index) => {
          return (
            <p key={index} className="p-2 text-sm text-slate-400">
              {description}
            </p>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:place-items-center">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-small text-slate-400">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]} </p>
            </div>
          );
        })}
        <button
          onClick={incrementExerciseCount}
          className="flex flex-col p-2 rounded border-[1.5px]  border-solid border-blue-600 hover:border-blue-900 w-full duration-200"
        >
          <h3 className="capitalize text-small text-slate-400">
            Complete Workout
          </h3>
          <p className="font-medium">{completeWorkout} / 5</p>
        </button>
      </div>
    </div>
  );
}
