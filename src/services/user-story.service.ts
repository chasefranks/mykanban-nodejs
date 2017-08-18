import { UserStory } from '../models/user-story'
import { Label } from '../models/label'

const userStories: UserStory[] = [
  new UserStory('1', 'waat?', 'what is meaning of life?', 'ready-for-dev', undefined)
]

export class UserStoryService {

  getUserStories(): UserStory[] {
    return userStories
  }

  getUserStoryById(id: string): UserStory {
    return userStories.find(u => u.id == id)
  }

  getPromisedUserStoryById(id: string): Promise<UserStory> {
    const found: UserStory = userStories.find(u => u.id == id)

    if (found == undefined) {
      return Promise.reject(new Error(`user story with id ${id} doesn't exist`))
    }
    return Promise.resolve(found)
  }

  addUserStory(u: UserStory): Promise<UserStory> {
    userStories.push(u)
    return Promise.resolve(u)
  }

  updateUserStory(id: string, u: UserStory): Promise<UserStory> {
    const idx = userStories.findIndex(u => u.id == id)
    userStories[idx] = u

    return Promise.resolve(u)
  }

}
