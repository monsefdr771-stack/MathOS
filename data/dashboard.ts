export const dashboardData = {
  hero: {
    streak: 12,
    studyHours: 42,
  },

  goal: {
    completed: 2,
    target: 4,
  },

  stats: {
    study: 42,
    exercises: 128,
    proofs: 19,
    achievements: 7,
  },

  weekly: [
    { day: "Mon", value: 3 },
    { day: "Tue", value: 6 },
    { day: "Wed", value: 2 },
    { day: "Thu", value: 8 },
    { day: "Fri", value: 5 },
    { day: "Sat", value: 4 },
    { day: "Sun", value: 7, active: true },
  ],

  tasks: [
    {
      id: 1,
      text: "Complete Analysis Exercises",
      done: false,
    },
    {
      id: 2,
      text: "Read Algebra Chapter 3",
      done: true,
    },
    {
      id: 3,
      text: "Solve Probability Problems",
      done: false,
    },
    {
      id: 4,
      text: "Review Calculus Notes",
      done: false,
    },
  ],
};