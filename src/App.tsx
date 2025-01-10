import { useState } from "react";
import "./App.css";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/helpers";

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

function App() {
  const [workout, setWorkout] = useState<Workout>(null);
  const [formula, setFormula] = useState<string>("bro_split");
  const [muscles, setMuscles] = useState<string[]>([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout() {
    console.log("formula", formula);
    console.log("muscles", muscles);
    console.log("goal", goal);
    if (!formula || !muscles.length || !goal) {
      return;
    }
    const newWorkout = generateWorkout({ formula, muscles, goal });
    console.log("newWorkout", newWorkout);
    setWorkout(newWorkout);
  }

  return (
    <main className="flex flex-col min-h-screen text-sm text-white bg-gradient-to-r from-slate-800 to-slate-950 sm:text-base">
      <Hero />
      <Generator
        formula={formula}
        setFormula={setFormula}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
