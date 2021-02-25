
import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './Dishdetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from '../../Redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dish,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addcomment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment))
    }
}


class Menu extends Component {
    state = {
        SelectedDish: null,
        modalOpen: false
    }

    onSelectedDish = (props) => {
        this.setState({
            SelectedDish: props,
            modalOpen: !this.state.modalOpen
        });

    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {

        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} SelectedDish={() => this.onSelectedDish(item)} />
            );
        }
        )

        let dishdetail = null;
        if (this.state.SelectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.SelectedDish.id)
            dishdetail = <DishDetail dish={this.state.SelectedDish}
                comment={comments}
                addComment={this.props.addcomment} />
        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            {dishdetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>



        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);