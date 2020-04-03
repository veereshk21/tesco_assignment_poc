import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../actions/index";

class News extends React.Component {
  componentDidMount() {
    // this.props.fetchNews();
  }
  render() {
    const { news = [] } = this.props;
    return (
      <Fragment>
        {news.map((item,i) =>
        item.title &&<div className="row"> 
          <div className="col-auto serialNumber">
            {i+1}
          </div>      
          <div className="col-auto">
              <a className="title" href={item.url}>{item.title} <span className="comhead">({item.author})</span> </a>
              <div className="subtext">
              {item.points} points by {item.author} {item.created_at} | hide | {item.num_comments} comments
              </div>
          </div>
        </div>
        )}
      </Fragment>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchNews());
}

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(News)
};
