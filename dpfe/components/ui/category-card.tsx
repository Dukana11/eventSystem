interface CategoryCardProps {
  icon: React.ReactNode;
  category: string;
  bgColor?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, category, bgColor = "#F5F5F5" }) => {
  return (
    <div
      className="w-[100px] h-[100px] rounded-xl p-5 flex flex-col items-center justify-center space-y-3 
                 transition-all duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-3xl">{icon}</div>
      <span className="font-semibold text-sm text-center">{category}</span>
    </div>
  );
};

export default CategoryCard;
