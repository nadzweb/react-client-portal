import React from 'react';
//import './styles.css'

const Project = ({project, compare}) =>
    <div key={project.id} className="col-sm-6 col-md-3">
        <div className={"project " + (project.compare ? "compare" : "")} >
            <img src={project.image} alt={project.name} />
            <div className="image_overlay"></div>
            <div className="view_details" onClick={() => compare(project)}>
              {project.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="project_price">{project.price}</span>
                    <span className="project_name">{project.name}</span>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    </div>

export default Project;
