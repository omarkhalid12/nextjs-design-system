import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps  } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

const buttonVariants = cva("inline-flex items-center rounded-md duration-200", {
  variants: {
    intent: {
      primary: "bg-white text-black dark:bg-white dark:text-black",
      outline: "bg-transparent text-white dark:text-white border border-grey-300",
      destructive: "bg-red-600 text-black dark:bg-red-800 dark:text-white border border-grey-300"
    },
    size: {
      xs: "px-2 text-xsv h-6",
      sm: "px-3 text-sm h-8",
      base: "px-4 text-base h-10",
      lg: "px-6 text-lg h-12",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "base",
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