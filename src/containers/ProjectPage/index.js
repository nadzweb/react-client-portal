import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {ProjectList} from '../../components/Projects'
import * as actions from '../../statemanager/actions/project';
import {connect} from 'react-redux';

class ProjectPage extends Component {
  componentWillMount() {
    this.props.actions.getProjects();
  }

  render() {
    const {projects, actions} = this.props;
    return (
      <div className="home mt-5">
        <ProjectList projects={projects} compare={actions.compare}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    projects: state.project.projects
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ProjectPage);
