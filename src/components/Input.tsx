import { InputProps } from "../models/ProjectModels";

const Input = ({ size, color, placeholder, value, onChange }: InputProps) => {
    const defaultClass = "flex items-center rounded-md size-fit px-1 py-1 border-1";
    const classes = {
        colors: {
            primary: "bg-white text-green-700 text-sm",
            secondary: "bg-[#B6B4A4] text-red-400 text-3xl"
        },
        sizes: {
            small: "text_base",
            medium: "text_xl w-100",
            large: "text_3xl w-150",
        }
    }
    return (
        <input type="text" value={value} onChange={onChange}
            className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color]}
            placeholder={placeholder} 
        >  
        </input>
    )
}

export default Input