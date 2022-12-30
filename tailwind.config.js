/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f36a5",

          secondary: "#f2b191",

          accent: "#6e35a3",

          neutral: "#3D233E",

          "base-100": "#FAF9FB",

          info: "#5BC2E1",

          success: "#7DE3CE",

          warning: "#A45E0E",

          error: "#F64652",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
