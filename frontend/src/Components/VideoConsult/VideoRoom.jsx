// src/components/VideoRoom.jsx

import React, { useEffect, useRef, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

// !! REPLACE 'YOUR_APP_ID' WITH YOUR ACTUAL AGORA APP ID !!
const APP_ID = 'e03ec14fdcc04abe960ee6f05af76f83'; 
const TOKEN = null; // A temporary token. For a real app, you would get this from your server.
const CHANNEL_NAME = 'video-consultation-channel'; 

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

function VideoRoom() {
  const [isJoined, setIsJoined] = useState(false);
  const localAudioTrack = useRef(null);
  const localVideoTrack = useRef(null);
  const remoteUsers = useRef({});
  
  useEffect(() => {
    async function joinRoom() {
      try {
        await client.join(APP_ID, CHANNEL_NAME, TOKEN, null);
        
        localAudioTrack.current = await AgoraRTC.createMicrophoneAudioTrack();
        localVideoTrack.current = await AgoraRTC.createCameraVideoTrack();
        
        await client.publish([localAudioTrack.current, localVideoTrack.current]);
        
        setIsJoined(true);
        localVideoTrack.current.play('local-player');
      } catch (error) {
        console.error('Failed to join the channel:', error);
      }
    }
    
    client.on('user-published', async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === 'video') {
        const remoteVideoTrack = user.videoTrack;
        remoteUsers.current[user.uid] = user;
        remoteVideoTrack.play(`remote-player-${user.uid}`);
      }
    });

    client.on('user-unpublished', user => {
      delete remoteUsers.current[user.uid];
      const playerElement = document.getElementById(`remote-player-${user.uid}`);
      if (playerElement) {
        playerElement.remove();
      }
    });

    joinRoom();

    return () => {
      localAudioTrack.current?.close();
      localVideoTrack.current?.close();
      client.leave();
    };
  }, []);

  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center p-4'>
      <div className='relative w-full max-w-5xl h-[70vh] bg-black rounded-lg shadow-2xl'>
        {isJoined ? (
          <div className='w-full h-full relative'>
            <div id='local-player' className='absolute bottom-4 right-4 w-48 h-32 border-4 border-white rounded-md z-10'></div>
            
            {Object.keys(remoteUsers.current).map(uid => (
              <div key={uid} id={`remote-player-${uid}`} className='absolute inset-0 w-full h-full'></div>
            ))}

            {Object.keys(remoteUsers.current).length === 0 && (
              <div className='absolute inset-0 flex items-center justify-center text-white text-xl font-medium'>
                Waiting for the doctor to join...
              </div>
            )}
          </div>
        ) : (
          <div className='flex items-center justify-center h-full text-white text-xl'>
            Connecting...
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoRoom;