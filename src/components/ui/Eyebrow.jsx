// Small uppercase label shown above every section heading, with a dash on each side.
// Use this everywhere so all section labels look the same.
// tone="dark" is for labels that sit on a dark (navy) background.
const Eyebrow = ({ children, tone = 'light', className = '' }) => {
  const text = tone === 'dark' ? 'text-[#ffb366]' : 'text-[#E67300]';
  const dash = tone === 'dark' ? 'bg-[#ffb366]' : 'bg-[#FF8000]';
  return (
    <span className={`inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] ${text} ${className}`}>
      <span aria-hidden="true" className={`w-5 h-0.5 rounded ${dash}`} />
      {children}
      <span aria-hidden="true" className={`w-5 h-0.5 rounded ${dash}`} />
    </span>
  );
};

export default Eyebrow;
