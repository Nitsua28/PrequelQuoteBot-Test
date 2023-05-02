import React from 'react';
import { getByAltText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { actorPictures } from './quoteData';
import { TestActorPictureComponent } from './testComponents/testActorPicture';

describe('tests', ()=> {

  const values = Array.from(actorPictures.values());
  const names = Array.from(actorPictures.keys());
  test.each(values)('render actor Pictures', async(value) => {

    if (value === "https://4.bp.blogspot.com/-CY9BB38dzss/VD25QaYDgmI/AAAAAAAAEqE/AhmiSvwndM0/s1600/Palp_trustme.jpg")
    {  
      console.log("test " + value);

      render(<TestActorPictureComponent link={value}/>);
      const image = screen.getByAltText('test');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', value);
      //expect(image).toHaveAttribute('alt', 'Logo');
      image.dispatchEvent(new Event('load'));
      expect(image.clientWidth).toBeGreaterThan(0);
      expect(image.clientHeight).toBeGreaterThan(0);
      await waitFor(() => {
        expect(image).toHaveProperty('complete', true);
      },{timeout: 5000});
    }
    
  });
})

