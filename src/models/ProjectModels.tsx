export interface ButtonProps {
    size: keyof ISizes;
    color: keyof IColors;
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface InputProps {
    size: keyof ISizes;
    color: keyof IColors;
    placeholder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextProps {
    size: keyof ISizes;
    color: keyof IColors;
    text: string;
}
  
export interface IColors {
    primary: string;
    secondary: string;
}
  
export interface ISizes {
    small: string;
    medium: string;
    large: string;
}

export interface ModalWindowProps {
    goods: IGood[];
    setGoods: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface IGood {
    title: string;
    description: string;
    price: string;
}

export interface GoodsViewProps {
    goods: IGood[]
}