import './App.css';
import { NavbarHeader } from './components/navbar';
import { OpenMap } from './components/mapDisplay';
import { useState } from 'react';

function App() {
  const [routeData, setRouteData] = useState({
    routeName: '',
    uploadedFile: null,
  });

  const handleUpload = (data) => {
    // Update the route data in the state
    setRouteData(data);
  };

  return (
    <div className="App">
      <NavbarHeader onUpload={handleUpload} />
      <OpenMap routeData={routeData} />
    </div>
  );
}

export default App;
