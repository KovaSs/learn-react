import React, { Component } from 'react'
import { DatePicker } from 'antd';

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state))
  }

  render() {
    const { from, to } = this.state;
    const { RangePicker} = DatePicker
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

    return (
      <div className="date-range">
        <RangePicker
          ref="daypicker"
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          onDayClick={ this.handleDayClick }
        />
        {selectedRange}
      </div>
    );
  }
}
export default DateRange

