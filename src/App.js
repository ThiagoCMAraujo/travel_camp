import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Router } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000' }}>
            <TooltipComponent content="Settings" position='top'>
              <button className='text-3x1'>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
