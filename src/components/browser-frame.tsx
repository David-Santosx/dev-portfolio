import { cn } from "@/lib/utils";

export function BrowserFrame({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-[0_24px_60px_-24px_rgba(0,0,0,.8)]",
        className
      )}
    >
      <div className="flex items-center gap-3 px-3.5 h-9 border-b border-white/10">
        <div aria-hidden className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        </div>
        {label && (
          <figcaption className="text-xs text-neutral-400 truncate">
            {label}
          </figcaption>
        )}
      </div>
      <div className="relative aspect-video bg-white">{children}</div>
    </figure>
  );
}
