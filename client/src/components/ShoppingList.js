import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import  PropTypes from 'prop-types';

export class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    
    render() {
        const { items } = this.props.item;
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
                            {items.map(({ id, name})=>(
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
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired, //its gonna be stored as prop 
    item: PropTypes.object.isRequired

}
const mapStateToProps = (state)=>({
    item: state.item  //its state.item because we named it as item in our reducer
});

export default connect(mapStateToProps, {getItems})(ShoppingList);

