import React from 'react'
import { Modal, Button } from 'react-bootstrap'
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

  class CalendarDetailModal extends React.Component {
    state={
      title:this.props.title,
      start:this.props.start,
      end:this.props.end,
    }

    // setTitle=(e)=>{
    //   this.props.setTitle(e.target.value)
    // }

    // handleSave=()=>{
    //   this.props.handleSave()
    //   this.
    // }

  render(){
  return [

    <Modal
      key="calendarDetail"
      show={this.props.show}
      onHide={() => this.props.handleShow(false)}
      dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">
          {this.props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display: "flex"}}>
          Title:
          <input value={this.props.title}
                 onChange={e=>this.props.setTitle(e.target.value)}
                 style={{width: "230"}}
          />
        </div>
        <div style={{display: "flex"}}>
          Start:
          {/*<DatePicker*/}
          {/*disabled={true}*/}
          {/*key="start"*/}
          {/*selected={this.props.start}*/}
          {/*onSelect={nd=>this.props.setStartDate(nd)}*/}
          {/*/>*/}
          <label>{this.props.start.format("LLL")}</label>
        </div>
        <div style={{display: "flex"}}>
          End:
          {/*<DatePicker*/}
          {/*key="end"*/}
          {/*selected={this.props.end}*/}
          {/*onChange={nd=>this.props.setEndDate(nd)}*/}
          {/*/>*/}
          <label>{this.props.end.format("LLL")}</label>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>this.props.handleSave()}>Save</Button>
        <Button onClick={() => this.props.handleShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>


  ]
}
}
// CalendarDetailModal.propTypes={
//   setStartDate:PropTypes.func,
//   setEndDate: PropTypes.func
// }

export default CalendarDetailModal