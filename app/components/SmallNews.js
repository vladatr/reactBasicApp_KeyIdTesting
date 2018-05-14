import React from 'react';

class SmallNews extends React.Component {

    render() {
        console.log("rendering small for " + this.props.article.id);
        return(
            <div>
                <h5>{this.props.article.title}</h5>
            </div>
        )
    }
}

export default SmallNews;