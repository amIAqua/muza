// Converts miliseconds to minutes and seconds format
export const trackDurationTransform = (duration_ms: number): string => {
  const minutes = Math.floor(duration_ms / 60000)
  const seconds = (duration_ms % 60000) / 1000
  return `${minutes}:${seconds < 10 ? 0 : ''}${seconds.toFixed(0)}`
}

//${seconds < 10 ? '0' : ''}
