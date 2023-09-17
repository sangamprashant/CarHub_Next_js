import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    title:String,
    containerStyles:String,
    handelClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit";
}

export interface SearchManufactureProps {
    manufacturers:String,
    setManufacture:(manufacturers:String) => void;
}