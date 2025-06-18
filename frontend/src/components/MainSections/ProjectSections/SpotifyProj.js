import React from 'react';
import testPlaylistImg from '../../../assets/images/chancePlaylistRequest.png'; //3:2

const SpotifyProj = () => {
  return (
    <>
      <h1 className="text-2xl font-bold pb-2">Playlist Automation with ChatGPT</h1>
      <p className="written-content-centering-width mb-2">Flask application leveraging the OpenAI Chat Completions API in tandem
        with Spotify&apos;s Web API in order to automate various procedures within the streaming service.</p>
      <div className='mx-auto max-w-xl p-4'>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src={testPlaylistImg} alt="Spotify Screenshot of Automated Playlist" className="w-full h-full object-cover" />
        </div>
      </div>
      <p className="written-content-centering-width mb-2">I got the idea for utilizing the OpenAI API for automating Spotify tasks from
        an RIT AI Club meeting. I was highly intrigued right away because I have always wanted to index the entire catalog of songs
        available on Spotify for songs featuring my favorite artist Chance the Rapper. In doing this, here are a few subjects I am learning 
        and practicing.</p>
      <ul className="list-disc written-content-centering-width pl-10">
        <li className>Routing with Flask</li>
        <li className>Auth. Flow (Spotify API authentication)</li>
        <li className>OpenAI API &quot;Function Calling&quot; configuration</li>
        <li className>Structured Output prompting</li>
      </ul>
    </>
  );
};

export default SpotifyProj;