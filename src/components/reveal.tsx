"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
  span: motion.span,
};

type Tag = keyof typeof tags;

interface RevealProps {
  as?: Tag;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease, delay },
  }),
};

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const reduce = useReducedMotion();
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={revealVariants}
      custom={delay}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </Component>
  );
}

/** Staggers its `RevealItem` children in as the group scrolls into view. */
export function RevealGroup({ as = "div", className, children }: Omit<RevealProps, "delay">) {
  const reduce = useReducedMotion();
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={groupVariants}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ as = "div", className, children }: Omit<RevealProps, "delay">) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
