import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Form } from "react-bootstrap";

function App() {
  const [formData, setFormData] = useState({
    numTimes: 1,
    cost: 20,
    drive: 10,
  });

  const [money, setMoney] = useState({
    costResult: 240,
    firstSavings: -2850,
    secondSavings: -240,
  });

  const [time, setTime] = useState({
    timeResult: "8 hours",
  });

  const { numTimes, cost, drive } = formData;

  const { costResult, firstSavings, secondSavings } = money;

  const { timeResult } = time;

  const calculateMoney = () => {
    let result = cost * numTimes * 12;
    let first = result - 3090;
    let second = result - 480;

    setMoney({
      ...money,
      costResult: result,
      firstSavings: first,
      secondSavings: second,
    });
  };

  const calculatetime = () => {
    let trip = drive * numTimes * 2;
    let year = trip * 12;
    let hours = year / 60;
    let minutes = hours * 60;

    console.log("Hours: " + hours, " Minutes: " + minutes);

    if (hours < 1) {
      setTime({ ...time, timeResult: minutes + " minutes" });
    } else {
      setTime({ ...time, timeResult: hours + " hours" });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
    calculateMoney();
    calculatetime();
  };

  return (
    <>
      <NavBar />
      <Container>
        <div class="container-fluid text-sm-center p-5 bg-light">
          <h1>Financial Savings</h1>
          <Form>
            <Form.Group>
              <Form.Label>
                How many times you currently/would like to float a month? -{" "}
                <strong>{numTimes}</strong>{" "}
              </Form.Label>
              <Form.Range
                type="range"
                min="1"
                max="30"
                name="numTimes"
                value={numTimes}
                size="sm"
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <Form.Label>
                Cost per session. (Average in the U.S. is $50 to $75/hr)
              </Form.Label>
              <Form.Control
                as="select"
                name="cost"
                size="sm"
                onChange={(e) => {
                  onChange(e);
                }}
                value={cost}
              >
                <option value="20">$20</option>
                <option value="30">$30</option>
                <option value="40">$40</option>
                <option value="50">$50</option>
                <option value="60">$60</option>
                <option value="70">$70</option>
                <option value="80">$80</option>
                <option value="90">$90</option>
                <option value="100">$100</option>
                <option value="110">$110</option>
                <option value="120">$120</option>
              </Form.Control>

              <hr />
              <Form.Label>Annual cost to pay to float at a center.</Form.Label>
              <Form.Control
                type="text"
                name="costResult"
                value={`$${costResult}`}
                size="sm"
                disabled
              />

              <Form.Label>First year savings</Form.Label>
              <Form.Control
                type="text"
                id="firstsavings"
                value={`$${firstSavings}`}
                size="sm"
                className={firstSavings < 0 ? "red" : "green"}
                disabled
              />

              <Form.Label>Second year savings</Form.Label>
              <Form.Control
                type="text"
                id="secondsavings"
                value={`$${secondSavings}`}
                size="sm"
                className={secondSavings < 0 ? "red" : "green"}
                disabled
              />
            </Form.Group>
          </Form>
          <hr />

          <h1>Time Savings</h1>
          <Form.Label>
            How long it takes to drive to your local float center. (1 way) in
            minutes?
          </Form.Label>
          <Form.Control
            type="text"
            name="drive"
            value={drive}
            size="sm"
            onChange={(e) => onChange(e)}
          />

          <Form.Label>Float sessions per year.</Form.Label>
          <Form.Control
            type="text"
            id="timeNum"
            value={numTimes * 12}
            size="sm"
            disabled
          />

          <Form.Label>Extra time spent driving/year.</Form.Label>
          <Form.Control
            type="text"
            id="timeResult"
            value={timeResult}
            size="sm"
            className="red"
            disabled
          />
        </div>
      </Container>
    </>
  );
}

export default App;
