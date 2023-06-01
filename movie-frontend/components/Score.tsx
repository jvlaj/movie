import * as React from "react";
import clsx from "clsx";

interface ScoreProps extends React.HTMLAttributes<HTMLDivElement> {
    movieScore: number,
    className?: string,
}

function Score
({movieScore, className}
     :
     ScoreProps
) {
    movieScore = Math.min(Math.floor(movieScore), 10);
    const remainingScore = Math.max(10 - movieScore, 0);
    return (
        <div className={clsx(className)}>
      <span className={clsx("font-bold text-yellow-300")}>
        {[...Array(movieScore)].map((_, i) => (
            <span key={i}> &#9733; </span>
        ))}
      </span>
            <span className={clsx("font-bold text-gray-300")}>
        {[...Array(remainingScore)].map((_, i) => (
            <span key={i}> &#9733; </span>
        ))}
      </span>
        </div>
    );
}

export {Score}

