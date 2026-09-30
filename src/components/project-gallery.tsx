"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./browser-frame";

export interface Screenshot {
  src: string;
  label: string;
}

export function ProjectGallery({
  name,
  screenshots,
}: {
  name: string;
  screenshots: Screenshot[];
}) {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <div className="space-y-3">
      <BrowserFrame label={`${name} · ${current.label}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={current.src}
              alt={`${name}: ${current.label}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>
        </AnimatePresence>
      </BrowserFrame>
      {screenshots.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              aria-label={shot.label}
              className="group space-y-1.5 text-left"
            >
              <span
                className={cn(
                  "relative block aspect-video overflow-hidden rounded-md border bg-white transition duration-300",
                  index === active
                    ? "border-orange-400 ring-1 ring-orange-400"
                    : "border-white/10 opacity-60 group-hover:opacity-100"
                )}
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </span>
              <span
                className={cn(
                  "block text-xs truncate transition-colors",
                  index === active
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {shot.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
