import { Post } from './post-schema'

export const postResolvers = {
  Query: {
    posts(root, args, context) {
      return Post.find().fetch()
    }
  }
}