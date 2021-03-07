import { createStore, createEvent, combine, Store } from 'effector'
import { IArtist, ITrack } from './types/search-results.types'

export type DetailsStore = IArtist | ITrack

// Effects
export const setContentDetails = createEvent<DetailsStore>()

export const clearContentDetails = createEvent()

// Details store
const $contentDetails = createStore<DetailsStore | null>(null)
  .on(setContentDetails, (state, content) => content)
  .on(clearContentDetails, (state) => null)

export const detailsStore: Store<{
  contentDetails: DetailsStore | null
}> = combine({
  contentDetails: $contentDetails,
})
