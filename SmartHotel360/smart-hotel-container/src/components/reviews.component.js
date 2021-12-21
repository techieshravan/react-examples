import Parcel from 'single-spa-react/parcel';

export default function Reviews(props) {
  return (
    <Parcel
      config={() => {
        return System.import('@smart-hotel/reviews').then((module) => {
          //Something
          return module;
        });
      }}
    ></Parcel>
  );
}
