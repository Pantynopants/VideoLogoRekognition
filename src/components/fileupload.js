import React from 'react';
import Dropzone from 'react-dropzone';
import Upload from 'rc-upload';

export default class Basic extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {
        return (
            <Upload onSuccess={console.log("okokok")} />

        );
    }
}