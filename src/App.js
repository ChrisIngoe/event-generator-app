import React from 'react';
import { ThemeProvider, createTheme, Arwes, Logo, Button } from 'arwes';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <div className="App">
          <header className="App-header">
            <Logo animate size={100} />
            <div style={{ padding: '20px' }}>
              <Button animate>Log</Button>
              <Button animate>Event</Button>
              <Button animate>Trace</Button>
            </div>
          </header>
        </div>
      </Arwes>
    </ThemeProvider>
  );
}

export default App;
