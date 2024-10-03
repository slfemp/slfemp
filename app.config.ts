export default defineAppConfig({
  ui: {
    primary: "slate",
    gray: "neutral",
    header: {
      links: {
        base: "py-2 px-4 font-medium text-lg transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity",
        active: "text-gray-900 dark:text-white after:opacity-100",
        inactive: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
      },
    },
    button: {
      base: "uppercase tracking-wider",
      rounded: "rounded-none",
      default: {
        size: "md",
      },
    },

  },
})
