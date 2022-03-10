export default function ({ store, redirect }) {
    const user_uid = store.getters.uid
    const auth = store.dispatch('api/getLevel', { uid: user_uid })
    if (!(store.getters.isAuthenticated && auth.level == 'admin')) {
      return redirect('/login')
    }
  }
  