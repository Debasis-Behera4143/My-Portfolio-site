import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Github, Eye } from "lucide-react";
import PropTypes from "prop-types";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, Github: GithubLink, Tech, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full h-full">
      <div className="premium-project-card h-full flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={Img}
            alt={Title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title & Description */}
          <div className="space-y-4 flex-grow">
            <h3 className="text-2xl font-bold primary-gradient">
              {Title}
            </h3>
            <p className="text-[#B0B8C5] text-base leading-relaxed">
              {Description}
            </p>

            {/* Tech Stack */}
            {Tech && Tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {Tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#121826] border border-[#2B6FFF]/30 rounded-full text-xs text-[#2B6FFF]"
                  >
                    {tech}
                  </span>
                ))}
                {Tech.length > 3 && (
                  <span className="px-3 py-1 bg-[#121826] border border-[#DFFF00]/30 rounded-full text-xs text-[#DFFF00]">
                    +{Tech.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#2B6FFF]/20">
            <div className="flex gap-3">
              {GithubLink ? (
                <a
                  href={GithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#121826] hover:bg-[#2B6FFF]/20 transition-colors"
                  title="View Source Code"
                >
                  <Github className="w-5 h-5 text-[#B0B8C5] hover:text-white" />
                </a>
              ) : null}

              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="p-2 rounded-lg bg-[#121826] hover:bg-[#2B6FFF]/20 transition-colors"
                  title="Live Demo"
                >
                  <Eye className="w-5 h-5 text-[#B0B8C5] hover:text-white" />
                </a>
              ) : null}
            </div>

            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="flex items-center gap-2 text-[#2B6FFF] hover:text-[#DFFF00] font-medium text-sm transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes
CardProject.propTypes = {
  Img: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Link: PropTypes.string,
  Github: PropTypes.string,
  Tech: PropTypes.array,
  id: PropTypes.number,
};

export default CardProject;