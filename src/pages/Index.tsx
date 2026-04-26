import seaBg from "@/assets/aot-sea.jpg";

const Index = () => {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat px-6 text-center"
      style={{ backgroundImage: `url(${seaBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-5xl font-extrabold text-red-600 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-7xl lg:text-8xl">
        la de prueba delox
      </h1>
      <a
        href="https://youtu.be/43R_qArpGiE?si=Fs6FuxDxFoGXR-pm"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 rounded-lg bg-red-600 px-10 py-4 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-700"
      >
        Ver
      </a>
    </main>
  );
};

export default Index;
