import { Comment } from './comment-schema'

export const commentResolvers = {
  Query: {
    posts(root, args, context) {
      return Comment.find().fetch()
    }
  }
}