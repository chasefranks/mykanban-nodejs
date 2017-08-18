import { Label } from './Label'

export class UserStory {
  id: string
  title: string
  description: string
  state: string
  labels: Label[]

  constructor(
    id: string,
    title: string,
    description: string,
    state: string,
    labels: Label[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.state = state
    this.labels = labels
  }
}
