import Aboutindex from './about/aboutindex'
import Showimage from './showimage';
import Developer from './Developer/developer';
import Firstsection from './FirstSection';
import Services from './Services/services';
import OurWork from './ourwork/ourwork';
import GrowingClient from './GrowingClient/GrowingClient._index';

import Headerindex from './header/headerindex';

function Welcome() {
  return (
    <div className='body'>
      
      <Firstsection/>
      
      <Aboutindex/>
      <Showimage/>
      <Developer/>
      <Services/>
      <OurWork/>
      <GrowingClient num={0}/>
      
    </div>
  );
}

export default Welcome;
