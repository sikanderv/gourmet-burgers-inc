import React, { Component } from 'react';
import classes from './Modal.css';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // Manage when Modal should be shown
    // show={this.state.ordering} from the BurgerBuilder container
    // children = <Spinner/>, again called in the BurgerBuilder container
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show ||
        // this condition added after spinner component (which is a child of the Modal component) added
        nextProps.children !== this.props.children;

    }

    componentWillUpdate(){
        console.log('Inside Modal componentwillupdate method');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    // if show is false, slide the modal off screen and its opacity is 0 (transparent)
                    style={
                        {
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'
                        }
                    }>
                    {this.props.children}
                </div>
            </Aux>
        )
    }

}

export default Modal;