let posts = []
let lastActivitytime = 0

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function createPost(obj) {
  await delay(1000)
  posts.push(obj)
  await updateLastUserActivityTime()
}

async function updateLastUserActivityTime() {
  await delay(2000)
  lastActivitytime = new Date()
}

async function deletePost() {
  await delay(3000)
  if (posts.length > 0) {
    posts.pop()
  } else {
    throw new Error("No post to delete")
  }
}

async function main() {
  try {
    let p1 = createPost({ title: "POST1" })
    let p2 = createPost({ title: "POST2" })
    let p3 = createPost({ title: "POST3" })

    await Promise.all([p1, p2, p3, updateLastUserActivityTime()])

    posts.forEach((n) => console.log(n.title))
    console.log(lastActivitytime)

    await deletePost()

    posts.forEach((n) => {
      console.log(n.title)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
