import React, { useEffect, useState } from 'react';
import { TestActorPictureAndMemesComponent } from './testComponents/testActorPicture';
import { actorPictures, prequelsmemes, originaltrilogymemes } from './quoteData';
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'
import { TestGifComponent } from './testComponents/testGifComponent';

function App() {


  const configuration: ConfigurationOptions = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_ACCESS_REGION
  }

  type Quote = {
    ID: string,
    Movie: string,
    Actor: string,
    GIF: string,
    Quote: string,
    Trilogy: string
  }

  const [quotes, setQuotes] = useState<Quote[]>([
      {
        ID: "template",
        Movie: "template",
        Actor: "template",
        GIF: "template",
        Quote: "template",
        Trilogy: "template"
      }
    ]
  );

  AWS.config.update(configuration);
  const docClient = new AWS.DynamoDB.DocumentClient();

  const fetchData = () => {
    const params = {
        TableName: "PrequelQuotes"
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            setQuotes(data.Items as Quote[]);
        }
    })
  }

  useEffect(()=>{
    
    (async ()=>{
        fetchData();
    })();
  }, [])
  
  return (
    <>
      <h2>Actor Picture Errors</h2>
      {
        Array.from(actorPictures).map(([key,value]) => (
          <TestActorPictureAndMemesComponent name={key}link={value}/>
        ))
        
      }
      <h2>Gif Errors</h2>
      {
        quotes.map((item) => (
          <>
            <TestGifComponent ID={item.ID}link={item.GIF}/>
          </>
        ))
        
      }
      <h2>Prequel Memes Errors</h2>
      {
        prequelsmemes.map(([key,value]) => (
          <TestActorPictureAndMemesComponent name={key}link={value}/>
        ))
        
      }
      <h2>Original Trilogy Memes Errors</h2>
      {
        originaltrilogymemes.map(([key,value]) => (
          <TestActorPictureAndMemesComponent name={key}link={value}/>
        ))
        
      }
    </>
    
    
  );
}

export default App;
