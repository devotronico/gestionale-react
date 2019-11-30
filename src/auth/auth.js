const Auth = {
  set: function(user) {
    // console.log('setAuth');
    // const auth = JSON.stringify({
    //   id: user.id,
    //   name: user.name,
    //   email: user.email,
    //   password: user.password,
    //   role: user.role,
    //   isAuthenticated: true
    // });
    const auth = JSON.stringify(user);
    localStorage.setItem('auth', auth);
  },

  get: function() {
    // console.log('getAuth');
    const auth = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : null;
    // console.log(auth);
    return auth;
  },
  remove: function() {
    localStorage.removeItem('auth');
  }
};

export default Auth;
