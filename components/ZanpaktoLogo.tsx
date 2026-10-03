export function ZanpaktoLogo({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/bleach/bleach-skull.jpg"
      alt="Bleach skull logo"
      className={`${className} rounded-full bg-white object-contain p-0.5 ring-1 ring-accent/50`}
    />
  );
}
