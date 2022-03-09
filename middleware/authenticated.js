export default function ({ store, redirect }) {
  // Check if user is not authenticated

  if (store.getters['auth/isAuthenticated']) {
    return redirect('/profile')
  }
}
