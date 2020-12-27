import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from "react-router-dom";
class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'Divyank',
                phone: '999999999'
            },
            {
                id: 2,
                name: 'Divyank2',
                phone: '999999998'
            }
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) =>{
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function (subscriber, index){
            if(subscriber.id = subscriberId){
                subscriberIndex = index;
            }
        }, this);

        let newSubscriberList = subscriberList;
        newSubscriberList.splice(subscriberIndex, 1);
        this.setState({subscriber: newSubscriberList});
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscriberList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }

        subscribersList.push(newSubscriber);
        this.setState({ subscriberList: subscribersList });
        console.log(this.state.subscriberList);
    }
    render() {
        return (
            // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
            // <ShowSubscriber subscriberList={this.state.subscriberList} />
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler = {this.deleteSubscriberHandler}/>}/>
                    <Route exact path="/addSubscriber" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/>
                </div>
            </Router>
        );
    }
}

export default PhoneDirectory