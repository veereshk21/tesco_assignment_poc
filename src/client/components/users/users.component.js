import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/index";

class Users extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers();
  }
  render() {
    const { users = [] } = this.props;
    return (
      <Fragment>
        {users.map((item,i) =>
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
  return store.dispatch(fetchUsers());
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default {
  loadData,
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
};
