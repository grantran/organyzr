// similar to chatty
// when the admin create new game
// it will display on the calendar
// the calendar is similar to the message list
// Edit team page.
// TODO list the rosters.
// TODO admin can upload team logo
// TODO adding games.
// TODO calendar that displays games.
// Only admin player can access this page
import React, {Component} from 'react';
import { Icon, Form, Accordion, Segment } from 'semantic-ui-react';
import moment from 'moment';

// import Players from './Players.jsx';

import BigCalendar from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  constructor (props) {
    super (props);
  };
  render () {
    return (
      // React Components in JSX look like HTML tags
      <Accordion name="ui accordion">
        <Accordion.Title>
          <Icon name='dropdown' />
          Calendar
        </Accordion.Title>
        <Accordion.Content>
          <Segment padded size='tiny'>
            <BigCalendar
              style={{height: '420px'}}
              events={[]}
            />
          </Segment>
        </Accordion.Content>
      </Accordion>
    )
  }
  // TODO 

}

export default Calendar;