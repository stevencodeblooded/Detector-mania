import React from 'react';
import RatingBar from './RatingBar';

const RatingSection = () => {
  const ratings = [
    { label: 'Facilità di utilizzo', score: 8, color: '#8aff90' }, // Green
    { label: 'Comodità', score: 8, color: '#f44336' }, // Red
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Green bars */}
      <div className="flex-1">
        {ratings
          .filter((rating) => rating.color === '#8aff90')
          .map((rating, index) => (
            <div>
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
            </div>
          ))}
      </div>

      {/* Red bars */}
      <div className="flex-1">
        {ratings
          .filter((rating) => rating.color === '#f44336')
          .map((rating, index) => (
            <div>
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
                <RatingBar
                  key={index}
                  label={rating.label}
                  score={rating.score}
                  color={rating.color}
                />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RatingSection;
