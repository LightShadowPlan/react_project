import React, {Component} from 'react'
import Header from '@C/home/header'
import Nav from '@C/home/nav'
import Guide from '@C/home/guide'
import HomeJob from '@C/home/homeJob'
import Axios from '@Lib/Axios'
import {HomeStyle} from './styledComponent'
const HomeContext = React.createContext()

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        // Axios.get('/api/Api_job/index',this,function(){
        //
        // })
    }

    render() {
        return (
                <HomeContext.Provider >
                    <HomeStyle className="Home">
                        <Header/>
                        <Nav/>
                        <Guide/>
                        <HomeJob/>
                    </HomeStyle>
                </HomeContext.Provider>
        );
    }
    componentDidMount() {

    }
}

export default Home;
