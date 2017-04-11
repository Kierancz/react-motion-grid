react-motion-grid
---------------

Installing
------------
```
$ npm install react-motion-grid --save
```

Example
--------------

```javascript
import React from 'react';
import MotionGrid from 'react-motion-grid';

export default class Test extends React.Component {
  createSlideItem(number) {
    return (
      <div style={{ height: 200, background: '#333' }}>{number}</div>
    );
  }

  render() {
    return (
      <MotionGrid canCenterOne={false} firstItemGutter={24} lastItemGutter={24} gutter={12} numberOfCards={2}>
        {this.createSlideItem(1)}
        {this.createSlideItem(2)}
        {this.createSlideItem(3)}
        {this.createSlideItem(4)}
        {this.createSlideItem(5)}
        {this.createSlideItem(6)}
        {this.createSlideItem(7)}
      </MotionGrid>
    );  
  }
} 
```

Contributing
--------------
To contribute, follow these steps:
- Fork this repo.
- Clone your fork.
- Run `npm install`
- Run `npm start`
- Goto `localhost:3000`
- Add your patch then push to your fork and submit a pull request

License
---------
MIT
