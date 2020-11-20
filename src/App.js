
import './App.css';
import PortalDemo from './Components/PortalDemo'
import RefsDemo from './Components/RefsDemo'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'

import ComponentC from './Components/ComponentC'
import { UserProvider} from './Components/userContext'
import CounterOne from './Components/CounterOne'
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
  
    {/* <PortalDemo/> */}
    {/* <RefsDemo/> */}
    {/* <ClickCounter name="vi"/>
    <HoverCounter/> */}
    {/* <UserProvider value="kcnd">
      <ComponentC/>
      </UserProvider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      <DataFetchingOne/> 
      {/* <DataFetchingTwo/>
      {/* <ParentComponent/> */}
      <Counter/>

    </div>
  );
}

export default App;
