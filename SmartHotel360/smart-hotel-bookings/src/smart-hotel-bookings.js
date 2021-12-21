import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import BookingsList from './bookings-list.component';
import BookingsSearch from './bookings-search.component';

export const bookingsList = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: BookingsList,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const bookingsSearch = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: BookingsSearch,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
