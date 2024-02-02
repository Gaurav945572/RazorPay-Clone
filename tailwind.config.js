/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
     fontFamily:{
      mullish:["Mulish" , "sans-serif"],
     } ,
     colors:{
      deepBlue :"#02042a",
      lighBlue:"#2b84ea",
      lightBlue300:"#4b94ed",
      lightBlue500:"#0b72e7",
      greenLight:"#61cea6",
      grayTexr:"#818597",
      lightGray:"#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead:"#162f56",
      geay2:"#525a76",
      lightGreen:"hsla(158, 52.7%, 59.4%, 1)",
      col:"hsla(0, 0%, 88.6%, 1)",
      bgcol:"hsla(220, 81.8%, 97.8%, 1)"
     },
    },
  },
  plugins: [],
}