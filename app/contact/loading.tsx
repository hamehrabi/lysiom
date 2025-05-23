export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-midnight)]">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-[var(--color-aurora)] border-t-transparent"></div>
        <h2 className="mt-4 font-['Press_Start_2P'] text-[var(--color-text-primary)]">Loading...</h2>
      </div>
    </div>
  )
}
