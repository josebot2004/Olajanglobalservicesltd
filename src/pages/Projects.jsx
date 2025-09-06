import { useMemo, useState } from 'react';
import projectsData from '../data/projects.js';
import ProjectModal from '../components/ProjectModal.jsx';

const filters = ['All', 'Solar', 'Office', 'IT'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const projects = useMemo(
    () =>
      filter === 'All'
        ? projectsData
        : projectsData.filter((p) => p.type === filter),
    [filter]
  );

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Page Header */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center">
        Our Projects
      </h1>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
        Explore some of our featured works across Solar, Office Solutions, and IT. 
        Click on a project card to view more details about each implementation.
      </p>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {filters.map((f) => (
          <button
            key={f}
            className={`px-5 py-2 rounded-full font-medium border transition-shadow duration-300 shadow-sm ${
              filter === f
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 hover:bg-primary-tint hover:text-primary border-gray-200'
            }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <button
            key={p.id}
            className="rounded-2xl border bg-white overflow-hidden text-left shadow-sm hover:shadow-lg hover:scale-105 transition-transform transform duration-300"
            onClick={() => {
              setSelected(p);
              setOpen(true);
            }}
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-10 transition-opacity"></div>
            </div>
            <div className="p-5">
              <div className="text-sm text-secondary font-medium tracking-wide uppercase">
                {p.type}
              </div>
              <div className="mt-2 font-semibold text-lg text-neutral">{p.title}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal open={open} onClose={() => setOpen(false)} project={selected} />
    </div>
  );
}
