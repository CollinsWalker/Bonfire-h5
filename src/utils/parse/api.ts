import Parse from './index'

// 获取小组列表

export function queryGroup() {
  const Group = Parse.Object.extend('Group')
  const query = new Parse.Query(Group)
  query.descending('createdAt')
  const results = query.find()
  return results
}

export function queryLimitData(className: string, limit: number, skip: number) {
  const Object = Parse.Object.extend(className)
  const query = new Parse.Query(Object)
  query.limit(limit) // 限制为最多 10 个结果
  query.skip(skip) // 跳过前 10 个结果
  query.descending('createdAt')
  const results = query.find()
  return results
}

// 添加数据
export function addObject(className: string, params: object) {
  const Object = Parse.Object.extend(className)
  const object = new Object()
  const results = object.save(params)
  return results
}

export function queryTest() {
  return new Promise((resolve, reject) => {
    // 这里做异步任务
    const Group = Parse.Object.extend('Group')
    const query = new Parse.Query(Group)
    query.descending('createdAt')
    query.find().then(
      function (results: any) {
        // the object was saved.
        resolve(results)
      },
      function (error: any) {
        // saving the object failed.
        reject(error)
      }
    )
  })
}

// 查询帖子数据
// export function queryPost() {
//   const Post = Parse.Object.extend('Post')
//   const query = new Parse.Query(Post)
//   const results = query.find()
//   return results
// }

// 添加分享贴子
// export function addPost(params) {
//   const Post = Parse.Object.extend('Post')
//   const post = new Post()
//   const currentUser = Parse.User.current()
//   post.set('user', currentUser)
//   const results = post.save(params)
//   return results
// }
