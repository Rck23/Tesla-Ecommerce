import { titleFont } from "@/config/fonts";

interface Props{
    title:string; 
    subtitle?: string; 
    className?: string; 
}
export const Tittle = ({title, subtitle, className }: Props) => {
  return (
    <div className={ `mt-3 ${className}`}>

        <h1 className={`${titleFont.className} antialiased font-semibold my-10 text-4xl`}>
            {title}
        </h1>

        {
            subtitle && (
                <h3 className="text-xl mb-10">{subtitle}</h3>
            )
        }
    </div>
  )
}
