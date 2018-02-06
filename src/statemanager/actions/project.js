import * as types from '../constants';

export const getProjects = () =>
  dispatch =>
    fetch(`projects.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PROJECTS,
          payload: response.projects
        })
      });

export const compare = project => ({
    type: types.COMPARE_PROJECT,
    project
});