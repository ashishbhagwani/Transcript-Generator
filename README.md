## TranscriptGenerator

TranscriptGenerator is used to create transcripts for videos.

## How to compile
Run `npm install` to install the node_modules dependencies.  
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Upload all the file from `dist/` to the server where you want to host the app.

## How to run
Run `npm install` to install the node_modules depndecies.  
Run `ng serve` for a dev server.Open any browser and Navigate to `http://localhost:4200/`.

## Features
Following are the steps to run the program. Also there are keyboard shortcuts for many steps which are specified in ()  
    1. Upload or drop the video and text file containing transcription.  
    2. Click `Add Start Marker at Current Playback`(shift+S) this will specify the start time for a portion of video where transcription needs to be added. You can also move that marker to change the start time. 
    3. You can play or pause the video by clicking on video or by pressing space button on keyboard.  
    4. Click `Add End Marker at Current Playback`(shift+E) this will specify the end time for a portion of video where transcription needs to be added.  
    5. You can add transcription by manually writing the transcription in the box at top right position of browser or selecting the portion of text from the file you uploaded.  
    6. For selecting the portion of text from the uploaded file click at the end position of text or move the cursor to the position you want to select in the box at bottom right position. All text from begining to the point where the cursor is will be highlighted.  
    7. Click `Use Selected Text`(shift+X) this will move highlighted text to the box in top right portion of browser.  
    8. Once you have selected start time, end time and transcript text for a portion of video press `Done`(shift+D)  
    9. You can add transcript for remaining video in similar way.  
    10. You can see the transcript you have already added on the timeline below the video. Scroll the mouse or move the slider of video playback to navigate in timeline.  
    11. If you want to edit or delete any transcript you have already added just click that transcript on timeline that will bring the transcript back to the box in top right portion.  
    12. Click `Preview Your Work` to preview the video with added transcripts.  
    13. Once you are done click `Generate WEbVTT`(shift+G) this will download the VTT file.  
