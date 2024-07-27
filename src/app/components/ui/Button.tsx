import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react"

const buttonVariants = cva("rounded-md font-semibold", {
  variants: {
    
  }
})


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";

}
const Button = ({ children, className, width= "w-full", ...rest } : IProps) => {
  return (
    <button className={`${className} ${width} rounded-lg text-white px-3 py-3 duration-200 font-medium border-2 border-white` }{...rest}>
      {children}
    </button>
  )
}

export default Button