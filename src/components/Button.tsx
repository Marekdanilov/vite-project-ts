import { ButtonProps } from "../models/ProjectModels";

const Button = ({ size, color, title, onClick }: ButtonProps) => {
  const defaultClass = "flex items-center rounded-md size-fit py-1 px-2";
  const classes = {
    colors: {
        primary: "bg-[#696860] text-white",
        secondary: "bg-[#454545] text-white"
      },
      sizes: {
        small: "text-base",
        medium: "text-xl",
        large: "text-3xl",
      }
  };
  return (
    <button className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color]} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button