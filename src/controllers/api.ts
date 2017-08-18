import { Response, Request, NextFunction } from "express";

/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.send(
    { // TODO make this it's own module and export a swagger or json doc representation
      resources: [
        {
          path: '/api',
          description: "retrieve top level resources exposed by this api",
          verbs: [ 'GET' ]
        },
        {
          path: '/userStory',
          description: "retrieve, create, and delete user stories",
          verbs: [ 'GET', 'POST', 'DELETE' ]
        },
        {
          path: '/userStory/:id',
          description: "get, delete, or update a single user story",
          verbs: [ 'GET', 'PUT', 'DELETE']
        }
      ]
    }
  )
};
