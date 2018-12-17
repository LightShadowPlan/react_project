import React, {Component} from 'react'
// import { observable, autorun, action } from 'mobx'
import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers'
import { DemoStyle } from './styledComponent'

console.log(reducers);
let reducer = combineReducers(reducers)
let store = createStore(reducer)

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
                result: 1,
            actionObj: {
                increase: {
                    type: 'INCREASE',
                    count: 2
                },
                decrease: {
                    type: 'DECREASE',
                    count: 2
                },
                multiply: {
                    type: 'MULTIPLY',
                    count: 4
                },
                except: {
                    type: 'EXCEPT',
                    count: 4
                },
                random: {
                    type: 'RANDOM'
                },
                double: {
                    type: 'DOUBLE'
                }
            }
        }
    }
    render() {
        console.log(store.getState());
        return (
                <DemoStyle className="Home">
                    <p>{this.state.result}</p>
                    <p onClick={this.changeState(this.state.actionObj.increase)}>+</p>
                    <p onClick={this.changeState(this.state.actionObj.decrease)}>-</p>
                    <p onClick={this.changeState(this.state.actionObj.multiply)}>*</p>
                    <p onClick={this.changeState(this.state.actionObj.except)}>/</p>
                    <p onClick={this.changeState(this.state.actionObj.random)}>随机</p>
                    <p onClick={this.changeState(this.state.actionObj.double)}>双倍</p>
                </DemoStyle>
        );
    }
    changeState (action) {
        return () => {
            store.dispatch(action)
            this.setState({ result: store.getState().count })
        }
    }
}

export default Demo;
