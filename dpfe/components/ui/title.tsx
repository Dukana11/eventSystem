

interface TitleProps{
    name: string;
    size?: 'sm' | 'base' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    className?: string;
}

const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
    xxxl: "text-3xl",
    xxxxl: "text-4xl"
}

const weightMap = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
}

export default function Title({
    name,
    size = 'xxl',
    weight = 'medium',
    className = '',
}:TitleProps){
    return(
        <div className={`${sizeMap[size]} ${weightMap[weight]} ${className}`}>
            {name}
        </div>
    )
}