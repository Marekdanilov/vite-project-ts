import { TextProps } from "../models/ProjectModels";

const Text = ({size, color, text}: TextProps) => {
    const defaultClass =  "flex items-center rounded-md size-fit font-semibold";
    const classes = {
        colors: {
          primary: {
            text: "text-green-500 font-sans",
          },
          secondary: {
            text: "text-sky-500 font-serif",
          },
        },
        sizes: {
          small: "text-base",
          medium: "text-xl",
          large: "text-3xl",
        },
    };
    return (
        <div className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].text}>
            {text}
        </div>
    )
}

export default Text
    
