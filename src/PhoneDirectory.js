import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';

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
            <ShowSubscriber subscriberList={this.state.subscriberList} />
        );
    }
}

export default PhoneDirectory