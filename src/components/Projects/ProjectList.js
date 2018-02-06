import React from 'react';
import {Project} from './index';

const ProjectList = ({projects, compare}) =>
  <div>
    <div className="row mt-3">
        {projects.map(project =>
          <Project key={project.id} project={project} compare={compare} />
        )}
    </div>
  </div>

export default ProjectList;
