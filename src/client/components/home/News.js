import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/index";

class News extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers();
  }
  render() {
    const { news = [] } = this.props;
    return (
      <div>
        <h4>News</h4>
        <ul>
          {news.map(item =>
          <div key={item.objectID} className="table-row">
            <span >
              <a href={item.url}>{item.title}</a>
            </span>
            <span >
              {item.author}
            </span>
           <span>
              {item.points}
            </span>
          </div>
        )}
        </ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

const mapStateToProps = state => ({
  news: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(News)
};
