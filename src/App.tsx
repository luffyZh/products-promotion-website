import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
import { LocaleProvider } from './i18n/LocaleProvider';
import './i18n/i18n';

function App() {
  return (
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  );
}

export default App;
