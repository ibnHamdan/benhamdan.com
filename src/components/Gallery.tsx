
import React from 'react';
import type { Project } from '../types';

interface GalleryProps {
    projects: Project[];
}

const Gallery: React.FC<GalleryProps> = ({ projects }) => {
    return (
        <div className="col-span-1 md:col-span-6 border-l border-grid-line bg-gray-50 flex overflow-hidden relative min-h-[400px]">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="gallery-item flex-1 hover:flex-[3] relative group border-l border-white/20 last:border-0 cursor-crosshair overflow-hidden"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                        style={{ backgroundImage: `url("${project.image}")` }}
                    >
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                    </div>

                    {/* Rotated Vertical Title (Visible when collapsed) */}
                    <div className="absolute top-8 right-1/2 translate-x-1/2 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
                        <span className="text-white font-mono text-xs font-bold tracking-widest uppercase text-rotated-arabic h-full py-4 border-l border-white/50 pl-2">
                            {project.number} / {project.category}
                        </span>
                    </div>

                    {/* Details (Visible when expanded) */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                        <p className="text-primary font-mono text-xs mb-2">{project.year}</p>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm max-w-md line-clamp-2 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex gap-2 mt-4">
                            {project.tech.map((t) => (
                                <span key={t} className="px-2 py-1 bg-white/10 text-white text-[10px] rounded backdrop-blur-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* Center Label Indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-700 delay-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                    حرك المؤشر للتصفح
                </div>
            </div>
        </div>
    );
};

export default Gallery;
