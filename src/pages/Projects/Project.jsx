import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal"; // Import modal component
import { motion } from "framer-motion";
import fadeIn from "../../variants";

const Project = ({ project }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetails = (project) => {
    setProjectDetails(project);
    setIsModalOpen(true);
  };

  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative group h-48 rounded-lg overflow-hidden shadow-sm border-2 border-[#058789] 
        hover:shadow-2xl transition-shadow duration-300 dark:border-[#04A2A4]"
      >
        <img
          src={project.project_image}
          alt={project.project_name}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black 
        bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-opacity-60"
        >
          <h3 className="text-white text-xl font-semibold">
            {project.project_name}
          </h3>
          <button
            onClick={() => handleDetails(project)}
            className="mt-2 shadow-md text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-700 
            transition-all duration-300 "
          >
            View Details
          </button>
        </div>
      </motion.div>

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
