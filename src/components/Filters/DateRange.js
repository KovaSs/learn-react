import React, { Component } from 'react'
import { DatePicker } from 'antd';
import { connect } from 'react-redux'
import { changeDateRange } from '../../AC'

class DateRange extends Component {

  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
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
export default connect(state => ({
  range: state.filters.dateRange
}), { changeDateRange })(DateRange)

