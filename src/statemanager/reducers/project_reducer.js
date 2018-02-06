import * as types from '../constants';

const INITIAL_STATE = {
    projects: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PROJECTS:
      return {
        ...state, projects: action.payload.map(project =>
          ({...project, compare: false})
        )
      }
    case types.COMPARE_PROJECT:
      return {
        ...state, projects: state.projects.map(project =>
            project.id === action.project.id ?
            ({...project, compare: !project.compare}) :
            project
        )
      }
    default:
      return state
  }
};
