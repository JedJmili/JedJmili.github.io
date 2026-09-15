export function ZanpaktoLogo({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bleach.jpg"
      alt="Bleach logo"
      className={`${className} rounded-full object-cover ring-1 ring-accent/40`}
    />
  );
}