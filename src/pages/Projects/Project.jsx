const Project = ({ project }) => {
    
  const { project_name, project_image } = project;

  const handleDetails = (project) =>{
    console.log(project)
  }
  return (
    <div className="relative group w-80 h-48 rounded-lg overflow-hidden shadow-sm border-2 border-[#058789] hover:shadow-2xl transition-shadow duration-300">
      <img
        src={project_image}
        alt={project_name}
        className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{project_name}</h3>
        <button onClick={()=> handleDetails(project)} className="mt-2 px-4 py-2 bg-[#058789] text-white rounded-lg shadow-md hover:bg-[#047173] transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Project;
