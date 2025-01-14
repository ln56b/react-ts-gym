import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex p-4 flex-col items-center justify-center pb-[50px] gap-10 text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>Lorem Ipsum</p>
        <h1 className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
          Neque porro quisquam est qui <span>dolorem ipsum</span>quia dolor sit
          amet adipisci velit.
        </h1>
      </div>
      <p className="text-sm font-light md:text-base">
        The point of using{" "}
        <span className="font-medium text-blue-400">Lorem Ipsum</span>
        is that it has a more-or-less normal distribution of letters, making it
        look like
        <span className="font-medium text-blue-400">readable English</span>.
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text. Various versions have evolved over
        the years.
      </p>
      <Button
        formulate={() => (window.location.href = "#generator")}
        text="Get Started"
      />
    </div>
  );
}
