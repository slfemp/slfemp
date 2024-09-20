import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "Barlow Condensed fallback", ...defaultTheme.fontFamily.sans],
        serif: ["Oswald", "Oswald fallback", ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
