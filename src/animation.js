export const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const staggerReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
}

export const itemFadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
}

export const itemFadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] } },
}

export const itemFadeRight = {
  hidden: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] } },
}

export const hoverLift = {
  y: -4,
  transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] },
}