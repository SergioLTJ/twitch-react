import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ChannelSelect from './views/channel-select';

const App: React.FC = () => (
  <RecoilRoot>
    <BrowserRouter>
      <ChannelSelect />
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
