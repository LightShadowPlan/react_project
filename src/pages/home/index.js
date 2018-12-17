import React, {Component} from 'react'
import { Get } from '@Lib/axios'
import Header from '@C/home/header'
import Nav from '@C/home/nav'
import Guide from '@C/home/guide'
import HomeJob from '@C/home/homeJob'

import {HomeStyle} from './styledComponent'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "listJob": [],
                "fourAd": [],
                "ad3": [],
                "twoAd": []
            }
        }
    }

    componentWillMount() {
        if(sessionStorage['data']){
            this.data = JSON.parse(sessionStorage['data'])
        } else{
            this.getData()
        }
    }

    render() {
        return (
                <HomeStyle className="Home">
                    <Header props={ this.state.data.ad3 }/>
                    <Nav  props={ this.state.data.fourAd }/>
                    <Guide props={ this.state.data.twoAd }/>
                    <HomeJob props={ this.state.data.listJob }/>
                </HomeStyle>
        );
    }
    componentDidMount() {
        if(this.data){
            this.setState({ data: this.data})
        }
    }
    componentWillUnmount() {
        sessionStorage['data'] = JSON.stringify(this.state.data)
    }
    getData() {
        Get('/Api_job/index', {}).then((res) => {
            this.setState({ data: res.data })
        }, (err) => {
            console.log(err)
        })
    }
}

export default Home;
