import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div>
      <Button>hello</Button>
      <Button disabled>Disabled hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href='www.baidu.com'>Baidu Link</Button>
      <Button btnType={ButtonType.Link} href='www.baidu.com' disabled>Baidu Link Disabled</Button>
    </div>
  );
}

export default App;
