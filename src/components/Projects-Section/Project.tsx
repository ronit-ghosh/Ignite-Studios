import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <>
      <div id="projectSection" className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans border-l-4 border-orange-500">
          Our Projects
        </h2>
        <ProjectCard />
      </div>
    </>
  )
}

export default Project
