import { usePokemon } from "../../context/pokemonProvider";
import { useRef, useEffect } from "react";

export function SoundButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { fetchPokemon } = usePokemon();

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set volume (0.0 to 1.0)
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Volume for autoplay so your ears don't bleed
    }
  }, []);

  const pokemonSound = fetchPokemon.data?.cries.latest;

  return (
    <>
      <div
        className="bg-gray-600 rounded-full size-10 border-1 border-black flex items-center justify-center hover:bg-gray-700 cursor-pointer"
        onClick={handlePlay}
      >
        <p>A</p>
      </div>
      <audio ref={audioRef} src={pokemonSound} autoPlay></audio>
    </>
  );
}
