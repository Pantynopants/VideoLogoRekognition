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

const emails = ['Upload Video', 'Upload Image'];
const styles = {
    avatar: {
        background: blue[100],
        color: blue[600],
    },
};
const options = {
    baseUrl: './upload',
        param : {
        category: '1'
    },
    dataType: 'json',
    wrapperDisplay: 'inline-block',
    multiple: true,
    numberLimit: 9,
    accept: 'image/*',
    chooseAndUpload : true,
    paramAddToField : { purpose: 'save' },
    //fileFieldName : 'file',
    fileFieldName(file){ return file.name },
    withCredentials: false,
        requestHeaders: { 'User-Agent': 'So Aanyip' },
 
    chooseFile: function(files) {
        console.log('you choose', typeof files == 'string' ? files : files[0].name)
    },
    beforeUpload: function(files, mill) {
        if (typeof files == PropTypes.string) return true
        if (files[0].size < 1024 * 1024 * 20) {
            files[0].mill = mill
            return true
        }
        return false
    },
    doUpload: function(files, mill) {
        console.log('you just uploaded', typeof files == 'string' ? files : files[0].name)
    },
    uploading: function(progress) {
        console.log('loading...', progress.loaded / progress.total + '%')
    },
    uploadSuccess: function(resp) {
        console.log('upload success..!')
    },
    uploadError: function(err) {
        alert(err.message)
    },
    uploadFail: function(resp) {
        alert(resp)
    }
}



class SimpleDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onRequestClose(value);
    };

    render() {
        const { classes, onRequestClose, selectedValue, ...other } = this.props;
        console.log("#############");
        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>Upload methods</DialogTitle>
                <DropUpload />
                <div>
                    <List>
                        {/* <DropUpload/> */}
                       
                        {/* {emails.map(email => (
                            <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItem>
                        ))} */}
                        {/* <FileUpload options={options}> */}
                            {/* <button ref="uploadBtn">upload</button> */}
                            {/* <Input
                                type='file' label='Upload' accept='.*'
                                buttonAfter={uploadFileButton}
                                ref={(ref) => this.fileUpload = ref}
                            /> */}
                            {/* <Button href="chooseAndUpload" >
                                Link
                            </Button> */}
                            {/* <ListItem button ref="chooseAndUpload" key={emails[0]}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={emails[0]} />
                            </ListItem> */}
                            {/* <ListItem button onClick={() => this.handleListItemClick(emails[1])} key={emails[1]}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={emails[1]} />
                            </ListItem> */}
                        {/* </FileUpload> */}
                        {/* <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="add account" />
                        </ListItem> */}
                    </List>
                </div>
            </Dialog>
        );
    }
}

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);


class SimpleDialogDemo extends React.Component {
    state = {
        open: false,
        selectedValue: emails[1],
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

export default SimpleDialogDemo;