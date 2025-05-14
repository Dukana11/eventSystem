const PasswordIcon = ({ className = '', width = '24', height = '24', color = '#4B5563' }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`lucide lucide-square-asterisk ${className}`}>
                
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8.5 14 7-4"></path>
            <path d="m8.5 10 7 4"></path>
        </svg>
    );
};

export default PasswordIcon;
