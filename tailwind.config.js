/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // tengo que cargar la fuente con el link de google en mi index, y crear
      // una fuente personalizada desde aqui, pasando en el arreglo, el nombre de la funete
      // y la destructuracion de alguna fuente an caso de que no la cuentre, "puedo ponerle cualquier"
      // nombre dentro de fontFamily, simplemnete esa va a hacer la manera de usarla con las classes
      // font-[nombre custom]

      // Y ya la reconoce como si fuera una clase ya predefinida por tailwind
      fontFamily: {
        clock: ['Share Tech Mono', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        bounce_clock: {
          '0%, 100%': {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic- bezier(0.8, 0, 1, 1)"
          },
          '50%': {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          },
      }
    },
    animation: {
      bounce_clock: "bounce_clock 1s ease-in-out infinite"
    }
  },
},
plugins: [],
}

