import Parcel from 'single-spa-react/parcel';

export default function BookingSearch(props) {
  return (
    <Parcel
      config={() => {
        return System.import('@smart-hotel/bookings').then((module) => {
          //Something
          return module.bookingsSearch;
        });
      }}
    ></Parcel>
  );
}
