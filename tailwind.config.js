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
      }
    },
  },
  plugins: [],
}

