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

export type Formula = "bro_split" | "bodybuilder_split" | "upper_lower";
