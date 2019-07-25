import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import banner from '../../../Images/manageinventory.jpeg';
import NavBar from '../../../Core/Layout/Navbar/NavBar';
import Footer from '../../../Core/Layout/Footer/Footer';
import {NavLink} from "react-router-dom";
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const newStyles = {
 
  height: 280,
  padding: '0 30px',
};

const ManageinventoryView = props =>{
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar/>
      <CssBaseline />
      <Container maxWidth="lg">
        
        
        <main>
          {/* Main featured post */}
          
          {/* End main featured post */}
          {/* Sub featured posts */}
          
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
              <h1>Manage Inventory</h1>
              <p>
                  <ol>
                      <li>
                      Develop a concrete definition of a lead and make sure all employees understand it
                      </li>
                      <li>
                      Distribute your leads quickly. ..
                      </li>
                      <li>
                      Install an effective customer relationship management (CRM) tool. ...
Track the source
                      </li>
                      <li>
                      Nurture your leads
                      </li>
                      <li>
                      Excite your sales staff about each prospect
                      </li>
                  </ol>
              </p>
              </Typography>
              <br/>
              <br/>
              <Divider/>
              
              
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={5} align="center" >
                <br/>
                <br/>
                
                
                
                    
                < Image  src ={banner} style={newStyles} />
              
                
                <br/>
                <br/>
                <br/>
                <br/>
                
              
            </Grid>
            {/* End sidebar */}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={5} align="center" >
                <br/>
                <br/>
                
                
                
                    
                < Image  src ={banner} style = {newStyles} />
                
                
                <br/>
                <br/>
                <br/>
                <br/>
                
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
              <h1>Product Returns</h1>
              <p >
                  <ol>
                      <li>
                      Develop a concrete definition of a lead and make sure all employees understand it
                      </li>
                      <li>
                      Distribute your leads quickly. ..
                      </li>
                      <li>
                      Install an effective customer relationship management (CRM) tool. ...
Track the source
                      </li>
                      <li>
                      Nurture your leads
                      </li>
                      <li>
                      Excite your sales staff about each prospect
                      </li>
                  </ol>
              </p>
              </Typography>
              <br/>
              <br/>
              <Divider/>
              
              
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            
            {/* End sidebar */}
          </Grid>
          
              <Typography variant="h6" gutterBottom align={"Center"}>
              <h1>Manage Your Business With Us</h1>
              <p>
              <NavLink to="/Register"  style={{color:"black",textDecoration: 'none'}} >
              <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
            style = {{background: "#0781bd"}}
          >
            Start free trial
          </Button>
          </NavLink>
              </p>
              </Typography>
              
              
              
            
        </main>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
      <Footer/>
    </React.Fragment>
  );
};

export default ManageinventoryView;