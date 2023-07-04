module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "hover-box": "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "#1e40af",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
