import React from "react";

type SectionWrapperProps = {
  header: string;
  title: string;
  children: React.ReactNode;
};
export default function SectionWrapper({
  children,
  header,
  title,
}: SectionWrapperProps) {
  return (
    <section className="flex flex-col min-h-screen gap-10">
      <div className="=bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center px-4">
        <p className="font-medium uppercase">{header}</p>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      <div className="max-w-[800px] w-full mx-auto p-4 flex flex-col gap-4 ">
        {children}
      </div>
    </section>
  );
}
