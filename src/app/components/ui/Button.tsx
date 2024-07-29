import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps  } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

const buttonVariants = cva("block rounded-md font-semibold duration-200", {
  variants: {
    intent: {
      primary: "bg-white text-black dark:bg-white dark:text-black",
      outline: "bg-transparent text-white dark:text-white border border-grey-300",
      destructive: "bg-red-600 text-black dark:bg-red-800 dark:text-white border border-grey-300"
    }
  },
  defaultVariants: {
    intent: "primary",
  }
})


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
const Button = ({ children, intent, ...rest } : IProps) => {
  return (
    <button className={
    tailwindCMerge(buttonVariants({ intent }))} {...rest} >
      {children}
    </button>
  )
}

export default Button