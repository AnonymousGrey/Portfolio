export function ScanlineOverlay() {
  return (
    <div className="scanline-overlay fixed inset-0 pointer-events-none z-[90]" aria-hidden="true">
      {/* Horizontal scanlines */}
      <div className="absolute inset-0 scanlines" />
      {/* Periodic flicker */}
      <div className="absolute inset-0 crt-flicker" />
    </div>
  );
}
