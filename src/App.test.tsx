import React from 'react';
import { getByAltText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { actorPictures, prequelsmemes, originaltrilogymemes } from './quoteData';
import { TestActorPictureAndMemesComponent } from './testComponents/testActorPicture';

describe('tests', ()=> {

  const values = Array.from(actorPictures.values());
  // const names = Array.from(actorPictures.keys());
  test.each(values)('render actor Pictures', async(value) => {
    
    render(<TestActorPictureAndMemesComponent  name={""} link={value}/>);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    // await waitFor(() => {
    //   image.dispatchEvent(new Event('load'));
      
    // },{timeout: 5000});
    //expect(image).toHaveProperty('complete', true);;
    expect(image).toHaveAttribute('src', value);
    expect(image).toHaveAttribute('alt', 'test');
    expect(image).toBeInTheDocument();
    
    // expect(image.clientWidth).toBeGreaterThan(0);
    // expect(image.clientHeight).toBeGreaterThan(0);
    
    
  });
  test.each(prequelsmemes)('render prequel memes', async(value) => {
    
    render(<TestActorPictureAndMemesComponent  name={""} link={value}/>);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    // await waitFor(() => {
    //   image.dispatchEvent(new Event('load'));
      
    // },{timeout: 5000});
    //expect(image).toHaveProperty('complete', true);;
    expect(image).toHaveAttribute('src', value);
    expect(image).toHaveAttribute('alt', 'test');
    expect(image).toBeInTheDocument();
    
    // expect(image.clientWidth).toBeGreaterThan(0);
    // expect(image.clientHeight).toBeGreaterThan(0);
    
    
  });

  test.each(originaltrilogymemes)('render prequel memes', async(value) => {
    
    render(<TestActorPictureAndMemesComponent  name={""} link={value}/>);
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    // await waitFor(() => {
    //   image.dispatchEvent(new Event('load'));
      
    // },{timeout: 5000});
    //expect(image).toHaveProperty('complete', true);;
    expect(image).toHaveAttribute('src', value);
    expect(image).toHaveAttribute('alt', 'test');
    expect(image).toBeInTheDocument();
    
    // expect(image.clientWidth).toBeGreaterThan(0);
    // expect(image.clientHeight).toBeGreaterThan(0);
    
    
  });
})

