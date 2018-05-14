import React from 'react';

class BigNews extends React.Component {

    render() {
        console.log("rendering big for " + this.props.article.id);
        return(
            <div>
                <h2>{this.props.article.title}</h2>
            </div>
        )
    }
}

export default BigNews;