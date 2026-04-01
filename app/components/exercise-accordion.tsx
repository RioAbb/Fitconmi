"use client";

import { useState } from "react";
import type { Exercise } from "../lib/programs-data";

type Props = {
  exercises: Exercise[];
  imageMap: Record<string, string>;
};

export default function ExerciseAccordion({ exercises, imageMap }: Props) {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [showAlts, setShowAlts] = useState<Record<number, boolean>>({});

  return (
    <div className="mt-6 space-y-4">
      {exercises.map((exercise, idx) => {
        const isOpen = openItem === idx;
        const altOpen = !!showAlts[idx];
        return (
          <article
            key={exercise.name}
            className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition-all duration-300 hover:border-[#a3e635]"
          >
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <div>
                <h3 className="text-3xl">{exercise.name}</h3>
                <p className="mt-1 text-sm text-[#a3e635]">
                  {exercise.setsReps} · {exercise.muscles}
                </p>
              </div>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-[#9ca3af]">
                {isOpen ? "Collapse" : "Expand"}
              </span>
            </button>

            <div
              className={`exercise-content grid transition-all duration-300 ${
                isOpen ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              <img
                src={imageMap[exercise.name]}
                alt={`${exercise.name} exercise demonstration`}
                loading="lazy"
                className="h-56 w-full rounded-xl object-cover"
              />
              <p className="mt-4 text-[#9ca3af]">
                <span className="text-white">Scientific benefit:</span> {exercise.benefit}
              </p>
              <div className="mt-3">
                <p className="text-sm text-white">Step-by-step instructions</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-[#9ca3af]">
                  {exercise.instructions.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setShowAlts((prev) => ({ ...prev, [idx]: !altOpen }))}
                  className="rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 px-3 py-1 text-xs text-[#a3e635]"
                >
                  {altOpen ? "Hide Alternatives" : "Show Alternatives"}
                </button>
                {altOpen && (
                  <p className="mt-2 text-sm text-[#9ca3af]">{exercise.alternatives.join(" · ")}</p>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
