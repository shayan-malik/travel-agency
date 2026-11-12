const base =
  "w-full rounded-xl border border-white/10 bg-navy-light px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

export default function Field({
  label,
  name,
  type = "text",
  options,
  value,
  onChange,
  placeholder,
  required = true,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label htmlFor={name} className="text-xs font-medium text-slate-400">
        {label}
      </label>

      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${base} cursor-pointer`}
          {...props}
        >
          <option value="" disabled>
            {placeholder || "Select"}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-navy">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${base} [color-scheme:dark]`}
          {...props}
        />
      )}
    </div>
  );
}