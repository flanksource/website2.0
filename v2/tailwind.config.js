module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blueBgPulse: {
          "0%, 100%": { backgroundColor: `#314352` },

          "50%": { backgroundColor: `#4e6577` }
        },
        slightSpin: {
          "0%, 100%": { transform: `rotate(-5deg)` },

          "50%": { transform: `rotate(5deg)` }
        },

        floatY: {
          "0%, 100%": { transform: `translateY(-7px)` },

          "50%": { transform: `translateY(7px)` }
        }
      },
      animation: {
        blueBgPulse: "blueBgPulse ease-in-out infinite",
        slightSpin: "slightSpin ease-in-out infinite",
        floatY: "floatY ease-in-out infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
