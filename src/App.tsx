import React from 'react';
import Button from './components/Button/button';

const App: React.FC = () => {
  return (
    <div>
      <Button>hello</Button>
      <Button disabled>Disabled hello</Button>
      <Button btnType='primary' size='lg'>hello</Button>
      <Button btnType='danger' size='sm'>hello</Button>
      <Button btnType='link' href='www.baidu.com'>Baidu Link</Button>
      <Button btnType='link' href='www.baidu.com' disabled>Baidu Link Disabled</Button>
    </div>
  );
};

export default App;
