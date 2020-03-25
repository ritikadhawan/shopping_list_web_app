import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';

export class ShoppingList extends Component {

    state = {
        items: [
            {id: 1, name: 'Hello'},
            {id: 2, name: 'World'},
            {id: 3, name: 'yeah'}
        ]
    }

    render() {
        return (
            <div>
                <Container>
                    <Button 
                    color="dark"
                    style={{ marginBottom: '2rem'}}
                    onClick={
                        ()=>{
                            const name=prompt('Enter Item');
                            if(name){
                                this.setState(state=>({
                                    items: [...state.items, { id: this.state.items.length+1, name}]
                                }));
                            }
                        }
                    }
                    >Add Item
                    </Button>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {this.state.items.map(({ id, name})=>(
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="small"
                                        onClick={()=>{
                                            this.setState(state=>({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                        >X</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default ShoppingList

