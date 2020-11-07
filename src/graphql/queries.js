/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blogID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      image
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        image
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        blog {
          id
          name
          image
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          image
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        image
        createdAt
        updatedAt
      }
      content
      image
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          blogID
          image
          createdAt
          updatedAt
        }
        content
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
