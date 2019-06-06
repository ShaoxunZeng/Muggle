import React, {Component} from 'react'
import styles from './index.module.less';
import {getMovieDetails} from "../../../../../services/apiMovies";

const testMovieInfo = {};

class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {}
        }
    }

    componentWillMount() {
        // todo() 调用接口5
        //  getMovieDetails(this.props.movieId)
        console.log(this.props.movieId);
        this.setState({
            movieInfo: testMovieInfo
        })
    }

    render() {
        return (
            <div>
                MovieInfo
            </div>
        );
    }
}

export default MovieInfo;
