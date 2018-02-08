import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import 'typeface-roboto';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';

import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';
import logo from './logo.svg';
import './App.css';
import { ProjectPage } from './containers/index';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const AppBarTitle = ({value, onChange}) => (
  <span>{value}</span>
);

/**
class AppBarTitle extends Component {
  state = {
    title: ''
  };
  render() {
    return (
        <span>{this.props.text}</span>
    );
  }
};
**/

class App extends React.Component {
  state = {
    mobileOpen: false,
    title: ''
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  setTitle(event) {
    console.log('<event>', event);
    this.setState({
      title: event.target.value
    })
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <img className="app-logo" src={logo} title="App logo" />
        <div className="app-company">nadzweb.com</div>
        <Divider/>
        <LeftNav />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <i className="material-icons">menu</i>
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
               <AppBarTitle onChange={this.setTitle}/>
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Switch>
              <Route exact path="/projects" component={ProjectPage}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
/**
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <LeftNav/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="justify-content-between align-items-center pb-2 mb-3 border-bottom">
                <Switch>
                  <Route exact path="/projects" component={ProjectPage}/>
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
 */
//export default App;
