import Reac, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'

class UserModal extends Component {
    state = {
        modal: false,
        name: '',
        email:'',
        address:''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ [e.target.email]: e.target.value })
        this.setState({ [e.target.address]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address
        }
        //Add user via addUser action
        this.props.addUser(newUser)

        //Close modal
        this.toggle()
    }

    render() {
        return(
            <div>
                <Button
                  color="dark"
                  style={{marginBottom: '2rem'}}
                  onClick={this.toggle}>
                Add User</Button>

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}>
                     <ModalHeader toggle={this.toggle}>Add To User List</ModalHeader>
                     <ModalBody>
                         <Form onSubmit={this.onSubmit}>
                             <FormGroup>
                                 <Label for="item">User</Label>
                                 <Input 
                                    type="text" 
                                    name="name" 
                                    id="user"  
                                    placeholder="Add user name" 
                                    onChange={this.onChange}/>
                                 <Input 
                                    type="email" 
                                    name="email" 
                                    id="email"  
                                    placeholder="Add user email" 
                                    onChange={this.onChange}/>
                                 <Input 
                                    type="text" 
                                    name="address" 
                                    id="address"  
                                    placeholder="Add user address" 
                                    onChange={this.onChange}/>
                                <Button
                                  color="dark"
                                  style={{marginTop: '2rem'}}
                                  block>Add Item</Button>
                             </FormGroup>
                         </Form>
                     </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { addUser }) (UserModal)