import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal"; // Import modal component

const Project = ({ project }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetails = (project) => {
    setProjectDetails(project);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="relative group h-48 rounded-lg overflow-hidden shadow-sm border-2 border-[#058789] hover:shadow-2xl transition-shadow duration-300">
        <img
          src={project.project_image}
          alt={project.project_name}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-xl font-semibold">{project.project_name}</h3>
          <button
            onClick={() => handleDetails(project)}
            className="mt-2 px-4 py-2  text-white rounded-lg shadow-md bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>

      {isModalOpen && projectDetails && (
        <ProjectDetailsModal
          project={projectDetails}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Project;
