import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/esm/Button';
import { Menu, MenuItem } from '@material-ui/core/esm';
import Comment from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/esm/styles';
import styled from 'styled-components';

class BallotShareButton extends Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  constructor (props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  shouldComponentUpdate (nextState) {
    if (this.state.open !== nextState.open) return true;
    if (this.state.anchorEl !== nextState.anchorEl) return true;
    return false;
  }

  handleClick (event) {
    this.setState({ anchorEl: event.currentTarget, open: true });
  }

  handleClose () {
    this.setState({ anchorEl: null, open: false });
  }

  render () {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <>
        <Button aria-controls="share-menu" onClick={this.handleClick} aria-haspopup="true" className={classes.button} variant="outlined" color="primary">
          <Icon>
            <i className="fas fa-share" />
          </Icon>
          Share
        </Button>
        <Menu
          id="share-menu"
          classes={{ paper: classes.paper }}
          open={this.state.open}
          onClose={this.handleClose}
          elevation={2}
          getContentAnchorEl={null}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            horizontal: 'right',
          }}
        >
          <MenuArrow />
          <MenuItem className={classes.menuItem}>
            <MenuFlex>
              <MenuIcon>
                <i className="fas fa-list" />
              </MenuIcon>
              <MenuText>
                Ballot
              </MenuText>
            </MenuFlex>
          </MenuItem>
          <MenuSeperator />
          <MenuItem className={classes.menuItem}>
            <MenuFlex>
              <MenuIcon>
                <Comment />
              </MenuIcon>
              <MenuText>
                My Choice & Opinions
              </MenuText>
            </MenuFlex>
          </MenuItem>
        </Menu>
      </>
    );
  }
}

const styles = () => ({
  paper: {
    borderRadius: '2px !important',
    marginTop: '10px !important',
    overflowX: 'visible !important',
    overflowY: 'visible !important',
  },
  button: {
    padding: '0 12px',
  },
  menuItem: {
    zIndex: '9 !important',
    padding: '0 !important',
    marginBottom: '-2px !important',
    paddingBottom: '3px !important',
    '&:last-child': {
      paddingBottom: '0 !important',
      paddingTop: '3px !important',
    },
    '&:hover': {
      background: '#efefef',
    },
  },
});

const Icon = styled.span`
  margin-right: 4px;
`;

const MenuFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px 8px 10px 18px;
`;

const MenuIcon = styled.div`
  width: 20px !important;
  height: 20px !important;
  top: -2px;
  position: relative;
  & * {
    width: 20px !important;
    height: 20px !important;
    min-width: 20px !important;
    min-height: 20px !important;
  }
  & svg {
    position: relative;
    left: -2px;
  }
`;

const MenuText = styled.div`
  margin-left: 12px;
`;

const MenuSeperator = styled.div`
  height: 2px;
  background: #efefef;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  left: 10%;
  z-index: 0 !important;
`;

const MenuArrow = styled.div`
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: white;
  position: absolute;
  top: -7px;
  left: calc(75%);
  border-top: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
`;

export default withStyles(styles)(BallotShareButton);
