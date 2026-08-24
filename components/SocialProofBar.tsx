"use client";

const ciudades = [
  "Tijuana", "Chiapas", "Monterrey", "CDMX", "Veracruz",
  "Guadalajara", "Tabasco", "Puebla", "Cancún", "Oaxaca",
];

export default function SocialProofBar() {
  return (
    <div className="bg-white border-y border-[#EAF1FB] py-3.5 overflow-hidden">
      <div className="flex items-center gap-2 mb-1 justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A2C049] animate-pulse shrink-0" />
        <span className="text-[11px] font-black text-[#173257] uppercase tracking-widest">
          Estudiantes de todo México ya estudian con nosotros
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 flex-wrap px-4">
        {ciudades.map((c, i) => (
          <span key={c} className="flex items-center gap-2 text-xs text-[#222B3A]/50 font-medium">
            {c}
            {i < ciudades.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-[#A2C049]/40 shrink-0" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
