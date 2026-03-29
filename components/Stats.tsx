const stats = [
  { value: "5", label: "Techniques de marquage", suffix: "" },
  { value: "25", label: "Années d'expérience", suffix: "ans" },
  { value: "3", label: "Délai de livraison moyen", suffix: "–5j" },
  { value: "100%", label: "Fabrication locale Alsace", suffix: "" },
];

export default function Stats() {
  return (
    <div className="bg-accent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 divide-x divide-white/20 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-8 text-center md:py-10"
            >
              <p className="font-heading text-4xl font-bold text-white md:text-5xl">
                {s.value}
                <span className="text-2xl text-white/70">{s.suffix}</span>
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
