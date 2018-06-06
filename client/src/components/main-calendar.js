
import React from 'react'

import Calendar from "react-big-calendar"

import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import CalendarDetailModal from './calendar-detail-modal'

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class MainCalender extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "This is a test"
        }
      ],
      show:false,
      selectedEvent:'',
      start:'',
      title:'',
      end:'',
    };
  }


  showModal=(isShow)=>{
    this.setState({show:isShow})
  }

  setStartDate=(sd)=>{
    this.setState({start:sd})
  }

  setEndDate=(ed)=>{
    this.setState({end:ed})
  }

  setTitle=e=>{
    this.setState({title:e})
  }

  onSlotChange=(slotInfo)=>{
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
    this.setModalValue({
      start:slotInfo.start,
      end:slotInfo.end,
      title:"",
      canSave:true
    })
    this.showModal(true)
  }


   addEvent=(event)=>{
     this.setState( {events: [...this.state.events, event]})
   }

   setModalValue=(event)=>{
     this.setState({selectedEvent: event})
     this.setState({title:event.title})
     this.setState({start:event.start})
     this.setState({end:event.end})
   }

   onEventClick=(event)=>{
    console.log('eventclick: '+event)
     this.setModalValue(event)
     this.showModal(true);
  }

  handleSave=()=>{
    let event = {
      start:this.state.start,
      end:this.state.end,
      title:this.state.title
      }
    this.addEvent(event)
    this.showModal(false)
  }



  render(){

    return (
      <div >
        <Calendar key="cal"
                  selectable={true}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={this.state.events}
                  style={{ height: "100vh" }}
                  onSelectEvent={(event,i) => this.onEventClick(event,i)}
                  onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }

        />
        <CalendarDetailModal key={1}
                             show={this.state.show}
                             handleShow={(isShow)=>this.showModal(isShow)}
                             title={this.state.title}
                             start={moment(this.state.start)}
                             end={moment(this.state.end)}
                             setStartDate={sd=>this.setStartDate(sd)}
                             setEndDate={ed=>this.setEndDate(ed)}
                             setTitle={e=>this.setTitle(e)}
                             handleSave={e=>this.handleSave(e)}
        />

      </div>
    );
  }
}

export default MainCalender;
