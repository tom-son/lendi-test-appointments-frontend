import {screen, render, fireEvent} from "@testing-library/react";

import Broker from "./Broker";

const testBroker = {
  name: "bob",
  id: 1,
  appointments: [{ brokerId: 1, date: "24/11/2021", id: 1 }],
};

describe("Broker Component", () => {
  test("should hide and show appointments on button click", () => {
    render(<Broker broker={testBroker} />);

    const hideAppointmentsButton = screen.getByTestId("broker-hide-appointments-button");
    fireEvent.click(hideAppointmentsButton);
    let appointmentsList = screen.queryByTestId("broker-appointments-list");
    expect(appointmentsList)
      .toEqual(null);

    const showAppointmentsButton = screen.getByTestId("broker-show-appointments-button");
    fireEvent.click(showAppointmentsButton);
    appointmentsList = screen.queryByTestId("broker-appointments-list");
    expect(appointmentsList)
      .toBeTruthy();
  });
});
