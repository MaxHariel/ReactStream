import React from "react";
import Modal from "./../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  actions() {
    const id = this.props.match.params.id;
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }
  renderContent() {
    if (!this.props.stream) {
      return "You are sure you want delete this stream:";
    }
    return `You are sure you want delete this stream: ${
      this.props.stream.title
    }`;
  }
  render() {
    return (
      <div>
        StreamDelete
        <Modal
          onDismiss={() => history.push("/")}
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.actions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
