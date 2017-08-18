// import * as passport from "passport";
// import * as request from "request";
// import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
//
// // import { User, UserType } from '../models/User';
// import { default as User } from "../models/User";
// import { Request, Response, NextFunction } from "express";
//
// // this should be type StrategyOptions
// const opts = {
//   secretOrKey: "mykanban",
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('bearer')
// }
//
// export const jwtStrategy: Strategy = new Strategy(opts, function(jwt_payload, done) {
//   User.findOne({ id: jwt_payload.sub }, function(err, user) {
//     if (err) {
//       return done(err, false)
//     }
//     if (user) {
//       return done(undefined, user)
//     } else {
//       return done(undefined, false)
//     }
//   })
// })
