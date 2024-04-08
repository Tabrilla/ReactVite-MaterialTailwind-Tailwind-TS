import withMT from "@material-tailwind/react/utils/withMT";
import { color } from "./src/themes/color";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // IMPORT HERE IF YOU WANT CUSTOMIZE
    },
    
  },

  plugins: [],
});
