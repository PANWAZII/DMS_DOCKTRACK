export default async function ({ store, redirect }) {
  const user_uid = store.getters.uid
  if (!user_uid) {
    return
  }
  const auth = await store.dispatch('api/getLevel', { uid: user_uid })
  console.log('login mid level', auth.level)
  console.log('login mid uid', user_uid)
  if (store.getters.isAuthenticated && auth.level === 'user') {
    return redirect('/user')
  } else if (store.getters.isAuthenticated && auth.level === 'admin') {
    return redirect('/admin')
  }
}
