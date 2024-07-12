import React from 'react';
import './MoodButtons.css'

const moods = [
    { emoji: '😁', mood: 'Happy' },
    { emoji: '😔', mood: 'Sad' },
]

const MoodButtons = ({ fetchAnimes }) => {
    return (
        <div className='mood-buttons'>
            {moods.map(({ emoji, mood }) => (
                <button key={mood} onClick={() => fetchAnimes(mood)}>{emoji} {mood}</button>
            ))}
        </div>
    )
}

export default MoodButtons;