import { useState } from "react";
import "./App.css";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState<string>("");
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
      {workout.length && <Workout workout={workout} />}
    </main>
  );
}

export default App;
