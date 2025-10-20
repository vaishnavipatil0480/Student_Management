import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider ,App as AntApp } from 'antd';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
    {/* antd compont used to define theam */}
      <ConfigProvider
      //theme
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 6,
          },
        }}
      >
        <AntApp>
        <div className="App">
          <AppRoutes/>
        </div>
        </AntApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
