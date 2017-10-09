import { Mongo } from 'meteor/mongo'

export const Post = new Mongo.Collection('posts')

export const postTypes = `
  type Post {
    _id: String
    title: String!
    content: String
    views: Int
  }
`

export const postQueries = `
  posts: [Post]
`