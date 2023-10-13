
import {createContext,useEffect,useReducer} from 'react'
import Reducer from './Reducer'

//İlk başta şu an ki durum için bir obje oluşturuyoruz.
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
}

/*
Girişten sonra her şey başarılı ise INITIAL_STATE'i güncelleyeceğiz.
ve bunu her component'te yapmamız için export etmemiz gerekecek.
*/

export const Context = createContext(INITIAL_STATE)

/*
Peki şimdi INITIAL_STATE içindeki propların (user,isfetching,error) nasıl
diğer componentlerde kullanılmasını nasıl sağlayabilirim ?

Tabii ki de context api sayesinde context provider kullanarak kullanacağımız
componentlerin dışına wrapping işlemi uygulayacağız.
*/

//Bu çocukları tüm componentlerde kullanacağız. Bunun çin de index.js'e ContextProvider atıcaz.
export const ContextProvider = ({children}) => {
    const  [state,dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(()=> {
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
    return(
        <Context.Provider value ={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}