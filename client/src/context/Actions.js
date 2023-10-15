/*Giriş ekranında bizim 3 durumumuz var bu 3 durumu biz burada 
Yöneteceğiz*/

export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})


export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START"
})


export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
})

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
})

/*Tamam şimdi biz bu durumları oluşturduk fakat bu durumlarda
oluşturudğumuz objenin proplarını (user,isFetching,error) nasıl
güncelleyebiliriz ? Reducer ile.  */