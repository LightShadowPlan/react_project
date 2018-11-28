import React, {Component} from 'react'
import Header from '@C/job/header'
import City from '@C/job/city'
import JobClass from '@C/job/job'
import Filter from '@C/job/filter'
import DefaultList from '@C/job/defaultList'
import {JobStyle} from './styledComponent'
import { jobData } from '@As/data/jobData'
const JobContext = React.createContext()

class Job extends Component {
    constructor(props) {
        super(props)
        this.state = {
            definedData: jobData,
            type: props.type,
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

    render() {
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
            case 0 : return <DefaultList props={this.state.type}/>;
            case 1 : return <City props={this.state.definedData.city}/>;
            case 2 : return <JobClass props={ { job: this.state.definedData.job, type: this.state.type }}/>;
            case 3 : return <Filter props={this.state.definedData.filter}/>;
        }
    }
}

export default Job;
