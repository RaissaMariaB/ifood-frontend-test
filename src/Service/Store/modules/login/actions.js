export function loginSucess(token) {
  return {
    type: '@auth/LOGIN_SUCESS',
    token,
  }
}
export function loginError(error) {
  return {
    type: '@auth/LOGIN_ERROR',
    error,
  }
}
