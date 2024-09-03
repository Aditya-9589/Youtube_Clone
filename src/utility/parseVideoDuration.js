import React from 'react';

export const parseVideoDuration = (duration) => {
  console.log(duration);

  const durationParts = duration
  .replace("PT", "")
  .replace("H", ":")
  .replace("M", ":")
  .replace("S", ":")
  .split(":")

  let hours = "00"; 
  let minutes = "00";
  let seconds = "00";

  if (durationParts.length === 3) {
    [hours, minutes, seconds] = durationParts;
  } else if (durationParts.length === 2) {
    [minutes, seconds] = durationParts;
  } else if (durationParts.length === 1) {
    [seconds] = durationParts;
  }

  console.log("Hours:", hours);
  console.log("Minutes:", minutes);
  console.log("Seconds:", seconds);

  console.log(durationParts);
  
  return (
   <>
   <p>{hours}:{minutes}:{seconds}</p>
   </>
  )
}

