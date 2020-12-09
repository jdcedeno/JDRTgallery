import React, { Component } from 'react';

class Artwork extends Component {
    render() {
        return(
            <div className="art-piece">
                <img src={this.props.image} alt={this.props.altmsg}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Artwork