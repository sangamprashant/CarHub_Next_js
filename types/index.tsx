import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    title:String,
    containerStyles:String,
    handelClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit";
}

export interface SearchManufactureProps {
    manufacturer:String,
    setManufacture:(manufacturer:String) => void;
}