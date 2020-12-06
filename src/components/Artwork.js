import React, { Component } from 'react';

class Artwork extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.image} alt={this.props.altmsg}/>
            </div>
        );
    }
}

export default Artwork