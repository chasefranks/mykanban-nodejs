import { Request, Response, NextFunction } from "express";
import { UserStoryService } from '../services/user-story.service'
import { UserStory } from '../models/user-story'

const service: UserStoryService = new UserStoryService()

export let getUserStories = (req: Request, res: Response) => {
  res.send(service.getUserStories())
}

export let getUserStoryById = (req: Request, res: Response) => {
  // var found: UserStory = service.getUserStoryById(req.params.id)
  // res.send(found)

  service.getPromisedUserStoryById(req.params.id)
    .then(u => res.send(u))
    .catch(e => console.log(e))
}

export let createUserStory = (req: Request, res: Response) => {
  service.addUserStory(new UserStory(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.state,
    req.body.labels)
  ).then(created => {
    res.status(201)
      .send(created)
  })
}

export let updateUserStory = (req: Request, res: Response) => {
  service.updateUserStory(
    req.params.id,
    new UserStory(
      req.params.id,
      req.body.title,
      req.body.description,
      req.body.state,
      req.body.labels
    )
  ).then(u => res.send(u))
}
