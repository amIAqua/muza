// Return spliced track name
export const computedTrackName = (name: string) => {
  if (name.length > 70) return `${name.slice(0, 69)}...`

  return name
}

// Return spliced artist name
export const computedArtistName = (name: string) => {
  if (name.length > 30) return `${name.slice(0, 29)}...`

  return name
}

// Compute follower to right format
export const computedFollowers = (followers: number) => {
  return followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
