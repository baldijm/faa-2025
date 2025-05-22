import React from 'react'

export default function JovsHomePage() {
  return (
    <div className="containerx">
      <div style={{ gridArea: 'header' }} className='border'>Header</div>
      <div style={{ gridArea: 'left-aside' }} className='border'>Left Aside</div>
      <div style={{ gridArea: 'banner' }} className='border'>Banner</div>
      <div style={{ gridArea: 'right-aside' }} className='border'>Right Aside</div>
      <div style={{ gridArea: 'main' }} className='border'>Main Content</div>
      <div style={{ gridArea: 'low-content' }} className='border'>Lower Content</div>
      <div style={{ gridArea: 'footer' }} className='border'>Footer</div>
    </div>
  );
}
