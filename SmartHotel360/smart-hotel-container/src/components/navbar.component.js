import ParcelComponent from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

export default function Navbar(props) {
  // eslint-disable-next-line no-undef
  const remoteImport = async (url) => await System.import(url);

  return (
    <>
      <div>{props.name}</div>
      {/* <ParcelComponent
        config={remoteImport('@smart-hotel/navbar')}
        mountParcel={mountRootParcel}
        wrapWith='section'
        className='app-container'
      /> */}
      {/* {remoteImport('@smart-hotel/navbar')} */}
      <div id='single-spa-application:@smart-hotel/navbar'></div>
    </>
  );
}
