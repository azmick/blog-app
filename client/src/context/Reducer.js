const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                //Bu durumda login tuşuna bastığımızda bekleme efekti koyabilriiz.
                user:null,
                isFetching:true,
                error:false
            }
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isFetching:false,
                error:false
            }
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching:false,
                error:true
            }
        case "LOGOUT":
            return {
                user:null,
                isFetching:false,
                error:false
            }
            default:
                return state
    }
}

export default Reducer
//Artık oluşturduğum aksiyonları ve reducer'ı kullanabilirim