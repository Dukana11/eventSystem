'use client'
import CategoryCard from "@/components/ui/category-card";
import Title from "@/components/ui/title";
import ArtIcon from "@/public/icons/art";
import BusinessIcon from "@/public/icons/business";
import EducationIcon from "@/public/icons/education";
import HealthIcon from "@/public/icons/health";
import OtherIcon from "@/public/icons/other";
import ScienceIcon from "@/public/icons/science";
import ShowIcon from "@/public/icons/show";
import SportIcon from "@/public/icons/sport";
import TechnologyIcon from "@/public/icons/technology";
import VolunteerIcon from "@/public/icons/volunteer";
import { useState, useEffect } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);

  const iconMap = {
    art: <ArtIcon />,
    sport: <SportIcon />,
    business: <BusinessIcon />,
    education: <EducationIcon />,
    science: <ScienceIcon />,
    technology: <TechnologyIcon />,
    health: <HealthIcon />,
    volunteer: <VolunteerIcon />,
    show: <ShowIcon />,
    other: <OtherIcon />,
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Алдаа:", err));
  }, []);

  return (
    <div className="pl-10 pr-10 pt-10">
      {/* <Title name="Ангилал" /> */}
      <div className="overflow-x-auto pb-10 pt-5">
        {/* 2 columns for every row */}
        <div className="flex gap-7">
          <CategoryCard icon={<ArtIcon />} category={"Урлаг"} bgColor="#FFF9EF" />
          <CategoryCard icon={<BusinessIcon />} category={"Бизнес"} bgColor="#F4FFDE" />
          <CategoryCard icon={<ScienceIcon />} category={"Шинжлэх ухаан"} bgColor="#EBF7FF" />
          <CategoryCard icon={<HealthIcon />} category={"Эрүүл мэнд"} bgColor="#FCFCFC" />
          <CategoryCard icon={<ShowIcon />} category={"Шоу тоглолт"} bgColor="#FFF2FA" />
          <CategoryCard icon={<SportIcon />} category={"Спорт"} bgColor="#FFF9EF" />
          <CategoryCard icon={<VolunteerIcon />} category={"Сайн дурын"} bgColor="#F4FFDE" />
          <CategoryCard icon={<EducationIcon />} category={"Боловсрол"} bgColor="#EBF7FF" />
          <CategoryCard icon={<TechnologyIcon />} category={"Технологи"} bgColor="#FCFCFC" />
          <CategoryCard icon={<OtherIcon />} category={"Бусад"} bgColor="#FFF2FA" />
        </div>
      </div>
    </div>
  );
}
