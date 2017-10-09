import { Mongo } from 'meteor/mongo'

export const Comment = new Mongo.Collection('comments')

export const commentTypes = `
  type Comment {
    _id: String
    content: String
  }
`

export const commentQueries = `
  comments: [Comment]
`