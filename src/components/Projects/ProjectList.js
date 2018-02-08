import React from 'react';
import {Project} from './index';

const ProjectList = ({projects, compare}) =>
  <div>
    <div className="row">
      <table className="table colored-header datatable project-list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date Start</th>
            <th>Days to Deadline</th>
            <th>Progress</th>
            <th>Priority</th>
            <th>Leader</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {projects.map(project =>
          <Project key={project.id} project={project} compare={compare} />
        )}
        </tbody>
      </table>      
    </div>
  </div>

export default ProjectList;
