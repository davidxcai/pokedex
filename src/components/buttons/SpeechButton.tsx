import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

const SpeechComponent: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const handleListen = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
    setIsListening(!isListening);
  };

  return (
    <>
      <button
        onClick={() => SpeechRecognition.startListening({ continuous: false })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Listening: {listening ? "on" : "off"}</p>
      <p>Transcript: {transcript}</p>
      <div className="bg-red-500 rounded-full border-1 border-black size-3" />
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={handleListen}
      >
        <div className="border-t-2 border-black w-5" />
        <div className="border-t-2 border-black w-5" />
        <div className="border-t-2 border-black w-5" />
        <div className="border-t-2 border-black w-5" />
      </div>
    </>
  );
};

export default SpeechComponent;
