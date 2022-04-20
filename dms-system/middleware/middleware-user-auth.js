export default async function ({ store, redirect }) {
  const user_uid = store.getters.uid
  if (!user_uid) {
    return redirect('/login')
  }
  const auth = await store.dispatch('api/getLevel', { uid: user_uid })
  if (!(store.getters.isAuthenticated && auth.level === 'user')) {
    return redirect('/login')
  }
}
