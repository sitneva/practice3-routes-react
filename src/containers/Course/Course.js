import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount()  {
        this.getParams();
    }
    componentDidUpdate() {
        this.getParams();
    }

    getParams() {
        const query = new URLSearchParams(this.props.location.search);
        for (let t of query.entries() )
        {
            if(this.state.courseTitle !== t[1]) this.setState({courseTitle: t[1]});
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;