import React from "react";
import { Project } from "@/components/projectdata";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="cursor-pointer flex flex-col items-center p-4 border rounded-2xl hover:shadow-md transition"
    >
      <Image
        src={project.logo}
        alt={project.name}
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-2"
      />
      <h3 className="text-lg font-semibold text-center text-white">{project.name}</h3>
    </div>
  );
};

export default ProjectCard;