import React, {Component} from 'react'
import Header from '@C/job/header'
import City from '@C/job/city'
import JobClass from '@C/job/job'
import Filter from '@C/job/filter'
import DefaultList from '@C/job/defaultList'
import Axios from '@Lib/Axios'
import {JobStyle} from './styledComponent'
import { jobData } from '@As/data/jobData'
const JobContext = React.createContext()

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {
                ...props,
            active: {
                selectActive: {
                  id: 0,
                  cityName: '全国'
                },
                changeSelect: this.changeSelect
            }
        }
        this.changeSelect.bind(this)
    }

    componentWillMount() {
        // Axios.get('/Api_job/index',this,function(){
        //
        // })
    }

    render() {
        console.log(this.state, "filter");
        return (
                <JobContext.Provider  >
                    <JobStyle>
                        <Header props={this.state.active}/>
                        { this.showJobPage() }
                    </JobStyle>
                </JobContext.Provider>
        );
    }
    componentDidMount() {

    }

    changeSelect = (num = 0) => {
        if(this.state.active.selectActive.id === num) num = 0
        this.setState({active :{
                selectActive: {
                    id: num,
                    cityName: '全国'
                },
                changeSelect: this.changeSelect
        }})
    }
    showJobPage() {
        switch (this.state.active.selectActive.id) {
            case 0 : return <DefaultList/>;
            case 1 : return <City props={this.state.city}/>;
            case 2 : return <JobClass props={this.state.job}/>;
            case 3 : return <Filter props={this.state.filter}/>;
        }
    }
}
Job.defaultProps = jobData
export default Job;
