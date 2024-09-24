import { useEffect, useState } from "react";

const useSound = (url, options) => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const audio = new Audio(url);
        audio.volume = options.volume || 1;

        setSound(audio);

        return () => {
            audio.pause();
            audio.currentTime = 0;
            setSound(null);
        };
    }, [url, options.volume]);

    const playSound = () => {
        if (sound) {
            const playPromise = sound.play();

            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error("Error playing audio:", error);
                });
            }
        }
    };

    return playSound;
};

// Example usage
const TestComponent = () => {
    const playSound = useSound("/path/to/sound.mp3", { volume: 0.5 });

    const handleClick = () => {
        console.log("Button clicked, playing sound...");
        playSound();
    };

    return (
        <div>
            <h1>Sound Test</h1>
            <button onClick={handleClick}>Play Sound</button>
        </div>
    );
};

export default TestComponent;
