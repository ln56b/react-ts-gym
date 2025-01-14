import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/workouts";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

type HeaderProps = {
  index: string;
  title: string;
  description: string;
};

type GeneratorProps = {
  muscles: string[];
  setMuscles: React.Dispatch<React.SetStateAction<string[]>>;
  formula: string;
  setFormula: React.Dispatch<React.SetStateAction<string>>;
  goal: string;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  updateWorkout: () => void;
};

type Formula = "bro_split" | "bodybuilder_split" | "upper_lower";

function Header({ index, title, description }: HeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-seminbold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="mx-auto text-sm sm:text-base">{description}</p>
    </div>
  );
}

export default function Generator(props: GeneratorProps) {
  const { muscles, setMuscles, formula, setFormula, setGoal, updateWorkout } =
    props;
  const [displaySectionTwo, setDisplaySectionTwo] = useState(true);

  function toggleSectionTwo(): void {
    setDisplaySectionTwo(!displaySectionTwo);
    if (!displaySectionTwo) {
      setMuscles([]);
    }
  }

  function setMusleGroup(muscleGroup: string): void {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((muscle) => muscle !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (formula !== "individual") {
      setMuscles([muscleGroup]);
      setDisplaySectionTwo(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setDisplaySectionTwo(false);
    }
  }

  return (
    <SectionWrapper
      id="generator"
      header="Why do we use it?"
      title="Content here, content here"
    >
      <Header
        index={"01"}
        title="WORKOUTS"
        description="It has survived the leap into electronic typesetting."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.keys(WORKOUTS).map((workout, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setFormula(workout);
                setMuscles([]);
              }}
              className={
                "py-3 duration-200 border border-blue-400 rounded-lg bg-slate-950 hover:border-blue-600" +
                (workout === formula ? " border-blue-800" : "")
              }
            >
              <p className="capitalize">{workout.replace(/[_]/g, " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title="FORMULAS"
        description="Lorem ipsum contains the typefaces more in use, an aspect that allows you to have an overview of the rendering of the text in terms of font choice and font size ."
      />
      <div className="flex flex-col p-4 border border-blue-400 border-solid rounded-lg bg-slate-900">
        <button
          onClick={toggleSectionTwo}
          className="relative flex items-center justify-center px-4 rounded-lg cursor-pointer bg-slate-950"
        >
          <p className="capitalize">
            {muscles.length ? muscles.join(" ") : "select muscles"}
          </p>
          <i className="absolute -translate-y-1/2 right-3 top-1/2 fa-solid fa-caret-down"></i>
        </button>
        {displaySectionTwo && (
          <div className="flex flex-col px-3 pb-3">
            {formula === "individual"
              ? (WORKOUTS[formula] as string[]).map((muscleGroup, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setMusleGroup(muscleGroup)}
                      className={
                        "duration-200 hover:text-blue-300" +
                        (muscles.includes(muscleGroup) ? " text-blue-300" : "")
                      }
                    >
                      <p className="uppercase">{muscleGroup}</p>
                    </button>
                  );
                })
              : Object.keys(WORKOUTS[formula as Formula]).map(
                  (muscleGroup, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => setMusleGroup(muscleGroup)}
                        className={
                          "duration-200 px-4 hover:text-blue-300" +
                          (muscles.includes(muscleGroup)
                            ? " text-blue-300"
                            : "")
                        }
                      >
                        <p className="uppercase">{muscleGroup}</p>
                      </button>
                    );
                  }
                )}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title="SCHEMES"
        description="Sunt in culpa qui officia deserunt mollit anim id est laborum"
      />
      <div className="grid grid-cols-1 grid-cols-3 gap-4 ">
        {Object.keys(SCHEMES).map((scheme, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "py-3 duration-200 border border-blue-400 rounded-lg bg-slate-950 hover:border-blue-600" +
                (scheme === scheme ? " border-blue-800" : "")
              }
            >
              <p className="capitalize">{scheme.replace(/[_]/g, " ")}</p>
            </button>
          );
        })}
      </div>
      <Button text="Formulate" formulate={updateWorkout} />
    </SectionWrapper>
  );
}
