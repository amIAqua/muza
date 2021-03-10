import { createEvent } from 'effector'

// Creating events
export const changeInputQuery = createEvent<string>()

export const clearSearchResults = createEvent()
