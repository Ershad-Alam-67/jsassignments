let posts = []
let lastActivitytime = 0
function createPost(obj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(obj)
      updateLastUserActivityTime()
      resolve()
    }, 1000)
  })
}
function updateLastUserActivityTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      lastActivitytime = new Date()
      res()
    }, 2000)
  })
}
function deletePost() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop()
        res()
      } else {
        rej("No post to delete")
      }
    }, 3000)
  })
}
let p1 = createPost({ title: "POST1" })
let p2 = createPost({ title: "POST2" })
let p3 = createPost({ title: "POST3" })
Promise.all([p1, p2, p3, updateLastUserActivityTime()])
  .then(() => {
    posts.forEach((n) => console.log(n.title))
    console.log(lastActivitytime)
    return deletePost() // Chain the next `then()` block
  })
  .then(() => {
    posts.forEach((n) => {
      console.log(n.title)
    })
  })
  .catch((err) => console.log(err))
