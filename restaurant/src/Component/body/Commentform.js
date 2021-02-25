import { React, Component } from 'react';
import { Button, Form, Input } from 'reactstrap';


class Commentform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        //console.log(this.state);
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
        event.preventDefault();
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" value={this.state.author} name="author" placeholder="Your name" required onChange={this.handleInputChange} />

                    <br />
                    <Input type="select" value={this.state.rating} name="rating" onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="text" value={this.state.comment} name="comment" placeholder="Give opinion" onChange={this.handleInputChange} />
                    <br />
                    <Button type="submit">Submit</Button>

                </Form>

            </div>
        )
    }
}

export default Commentform;