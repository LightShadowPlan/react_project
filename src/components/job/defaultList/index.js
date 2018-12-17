import React, {Component} from 'react';
import { Get } from '@Lib/axios'
import { DefaultListStyle } from './styledComponent'
import JobList from '@C/commons/jobList'
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'


class DefaultList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.props,
            pages: 1,
            pageArr: []
        }
    }
    componentWillMount() {
        if(sessionStorage['type'+this.state.type]){
            this.localData = JSON.parse(sessionStorage['type'+this.state.type])
        } else{
            this.loadMoreData(this.state.type,this.state.pages)
        }
    }
    render() {
        return (
                <DefaultListStyle className="container">
                    <Scroll ref='scroll'
                            pullUpLoad
                            click={true}
                            pullUpLoadMoreData={this.loadMoreData}
                    >
                        <JobList props={this.state.pagesArr}/>
                    </Scroll>
                </DefaultListStyle>
        )
    }
    componentDidMount() {
        this.scrollObj = this.refs.scroll.getScrollObj()
        if(this.localData){
            this.setState( this.localData )
        }
    }
    componentWillUnmount() {
        sessionStorage['type' + this.state.type] = JSON.stringify(this.state)
    }

    loadMoreData = () => {
        let { type, pages, pageArr } = this.state
        return new Promise( resolve => {
            Get('/jobsearch/ajax?search=1&s_c='+type+'&page='+pages, {}).then((res) => {
                let newPagesArr = pageArr
                newPagesArr.push(...res.data.lists)
                this.setState({ pages: pages + 1, pagesArr: newPagesArr })
                resolve()
            }, (err) => {
                console.log(err)
            })
        })
    }
}


export default DefaultList;

