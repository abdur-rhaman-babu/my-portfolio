import { CgMediaLive } from "react-icons/cg";
import { FaGithubSquare, FaRegTimesCircle } from "react-icons/fa";

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg text-red-600 font-bold"
        >
          <FaRegTimesCircle size={30} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img
              src={project.project_image}
              alt={project.project_name}
              className="w-full max-h-80 object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">{project.project_name}</h2>
            <p className="text-gray-600 mb-3">{project.brief_description}</p>

            <h3 className="text-lg font-semibold mt-3">
              Main Technology Stack:
            </h3>
            <ul className="list-disc ml-5 text-gray-700">
              {project.main_technology_stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-3">Challenges Faced:</h3>
            <p className="text-gray-600">{project.challenges_faced}</p>

            <h3 className="text-lg font-semibold mt-3">
              Potential Improvements:
            </h3>
            <p className="text-gray-600">{project.potential_improvements}</p>

            <div className="mt-5 flex gap-3">
              {project.github_repository_link && (
                <a
                  href={project.github_repository_link}
                  target="_blank"
                  className="flex items-center p-2 gap-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all text-center"
                ><i><FaGithubSquare /></i>
                  GitHub Repo
                </a>
              )}
              {project.live_project_link && (
                <button>
                  {" "}
                  <a
                    href={project.live_project_link}
                    target="_blank"
                    className="text-white flex items-center gap-2 bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold"
                  ><i><CgMediaLive /></i>
                    Live Project
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
