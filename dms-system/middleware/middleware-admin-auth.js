export default function ({ store, redirect }) {
    const level = store.dispatch('api/getLevel', { uid: user_uid })
    if (!(store.getters.isAuthenticated && level == 'admin')) {
      return redirect('/login')
    }
  }
  