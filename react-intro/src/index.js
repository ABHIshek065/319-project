import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hook from './components/Hook'
import Dynamic from './components/Dynamic'
import HookOne from './components/HookOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
<App />
<Hook/>
<Dynamic/>
<HookOne/>

</div>
);




