import Button from "@/components/ui/Button";

export default function ResultCard({ item, onSelect }) {
  return (
    <div
      data-result
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/10 bg-navy-light/60 p-4 text-left transition-colors duration-300 hover:border-gold/40"
    >
      <div>
        <h4 className="font-semibold text-white">{item.title}</h4>
        <p className="text-sm text-slate-400">{item.subtitle}</p>
        <p className="mt-1 text-xs text-gold">{item.time}</p>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-5">
        <p className="text-2xl font-bold text-white">
          ${item.price}
        </p>
        <Button size="sm" onClick={() => onSelect?.(item)}>
          Select
        </Button>
      </div>
    </div>
  );
}