/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import Input from 'material-ui/Input';
import DropUpload from './dropUpload'
import Basic from './fileupload'

var FileUpload = require('react-fileupload');



class ShowVideo extends React.Component {
    state = {
        open: false,
        selectedValue: "",
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
        return (
            <div>
                {/* <Typography type="subheading">Selected: {this.state.selectedValue}</Typography>
                <br /> */}
                {/* <InboxIcon /> */}
                <Button onClick={this.handleClickOpen}>Upload</Button>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default ShowVideo;