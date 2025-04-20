export const fadeIn = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
}

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
}

export const slideInFromLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
}

export const slideInFromRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: custom * 0.15,
    },
  }),
}
