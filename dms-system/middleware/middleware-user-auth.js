export default async function ({ store, redirect }) {
  const user_uid = store.getters.uid
  const auth = await store.dispatch('api/getLevel', { uid: user_uid })
  console.log("this is uid user mid ",user_uid);
  console.log("this is level user mid ",auth.level);
  if (!(store.getters.isAuthenticated && auth.level === 'user')) {
    return redirect('/login')
  }
}
