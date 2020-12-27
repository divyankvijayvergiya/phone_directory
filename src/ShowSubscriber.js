import React, { Component } from 'react';
import Header from './Header';
import "./ShowSubscriber.css";
import {Link} from 'react-router-dom';
class ShowSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      subscriberListToShow: [{
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

  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name: "Divyank",
  //     phone: "00000000"
  //   }
  //   let subscriberList = this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow: subscriberList}) 
  // }

  render() {
    //   let subscribers = [
    //     {
    //       id: 1,
    //       name: "Shilpa",
    //       phone:"0000000000"
    //     },
    //     {
    //       id: 2,
    //       name: "Srishti",
    //       phone:"0000000000"
    //     }
    // ];
    return (
      <div>

        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/addSubscriber"><button className="custom-btn add-btn">Add</button></Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscriberList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscriber;