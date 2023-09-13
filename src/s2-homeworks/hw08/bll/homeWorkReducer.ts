import { UserType } from '../HW8'

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = [], action: ActionType): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      const callback = (a: UserType, b: UserType) => a.name.localeCompare(b.name)

      return [...state].sort((a, b) => {
        return action.payload === 'up' ? callback(a, b) : callback(b, a)
      })
    }
    case 'check':
      return state.filter((user) => user.age >= action.payload)
    default:
      return state
  }
}
