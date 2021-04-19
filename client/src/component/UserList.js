import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getUsers, deleteUser, updateUser } from "../actions/userActions";
import PropTypes from "prop-types";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onDeleteClick = (id) => {
    this.props.deleteUser(id);
  };

  onUpdateClick = (id) => {
      this.props.updateUser(id)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { users } = this.props.user;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="user-list">
            {users.map(({ _id, name, email, address }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;</Button>
                  {name} || {email} || {address}
                  <Button 
                     className="btn btn-dark" 
                    size="sm" 
                    onClick={this.onUpdateClick.bind(this, _id)} >
                      Update </Button> 
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(UserList);
