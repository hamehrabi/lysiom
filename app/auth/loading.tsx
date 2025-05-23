export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-deep-space)]">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute inset-0 rounded-full border-t-2 border-[var(--color-aurora)] opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-l-2 border-[var(--color-nebula)] opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-b-2 border-[var(--color-plasma)] opacity-75"></div>
      </div>
      <p className="mt-4 text-[var(--color-text-secondary)] font-pixel">LOADING...</p>
    </div>
  )
}
