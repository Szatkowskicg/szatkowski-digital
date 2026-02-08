import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";

const TextSection = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-2 items-end justify-center">
      <h1 className="h1 font-bold mb-8">{title}</h1>
      <p className="pl-12 text-lg pb-8">{description}</p>
      <Button className="text-xl">Check more</Button>
    </div>
  );
};

export const Project1 = () => {
  const t = useTranslations("portfolio.projects.project1");

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <TextSection title={t("title")} description={t("description")} />

        <div className="lg:flex-3 flex flex-row items-center justify-end gap-2 overflow-hidden">
          <Image
            src="/images/smokins_app_1.webp"
            width={400}
            height={800}
            alt="Opis zdjęcia"
            className="h-140 lg:h-160 w-auto max-lg:hidden"
          />
          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Opis zdjęcia"
            className="h-100 w-auto max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export const Project2 = () => {
  const t = useTranslations("portfolio.projects.project2");

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <div className="lg:flex-3 flex flex-row items-center justify-center gap-2 overflow-hidden">
          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Opis zdjęcia"
            className="h-max w-auto max-lg:hidden"
          />
        </div>

        <TextSection title={t("title")} description={t("description")} />
      </div>
    </div>
  );
};

export const Project3 = () => {
  const t = useTranslations("portfolio.projects.project3");

  return (
    <div className="relative w-full h-full flex items-center justify-center text-white">
      <div className="container flex flex-row items-center justify-center max-lg:space-y-8 max-lg:flex-col gap-8">
        <TextSection title={t("title")} description={t("description")} />

        <div className="lg:flex-3 flex flex-row items-center justify-end gap-2 overflow-hidden">
          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Opis zdjęcia"
            className="h-120 lg:h-128 w-auto max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};
