import React from "react";
import { Container } from "react-bootstrap";

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <div className="vh-100 my-5">
          <h1>Events</h1>
        </div>
      </Container>
    );
  }
}
export default EventsPage;