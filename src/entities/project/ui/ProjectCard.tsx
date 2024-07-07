import { UIButton } from "@/shared/ui/UI-Button";
import { IProject } from "../model";
import { useRouter } from "next/router";

export const ProjectCard = ({id, attributes} : IProject) => {
  const router = useRouter()
  const {title, description, image} = attributes
  const {url} = image.data.attributes
  return <div 
  className="w-[40%] shadow-xl hover:-translate-y-2.5 delay-50 ease-in transition-all">
    <img 
    alt=""
    className="w-full h-[300px]" 
    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`} />
    <div className="pt-3 px-5 pb-10 flex flex-col gap-y-4">
      <h1 className="text-black font-bold text-4xl">
        {title}
      </h1>
      <p className="text-black font-normal text-lg opacity-40">
        {description}
      </p>
      <UIButton.Secondary
        onClick={() => router.push(`/projects/${id}`)}
      >
        <p className="text-white100 font-bold text-xl">Подробнее</p>
      </UIButton.Secondary>
    </div>
  </div>
}