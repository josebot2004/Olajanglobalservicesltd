export default function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Project Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary relative inline-block">
            {project.title}
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-secondary rounded-full"></span>
          </h3>

          {/* Project Description */}
          <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-6 inline-flex px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-md hover:bg-primary-light hover:shadow-lg transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
