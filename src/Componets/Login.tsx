import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useReducer } from 'react';

interface AuthState {
    Validacion: boolean;
    Token: null | string;
    userName: string;
    Nombre: string;
}

const initialState: AuthState = {
    Validacion: true,
    Token: null,
    userName: '',
    Nombre: ''
}
type LoginPayload = {
    userName: string;
    Nombre: string;
}

type AuthAction =
    | { type: 'Logout' }
    | { type: 'Login', Payload: LoginPayload };

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'Logout':
            return {
                Validacion: false,
                Token: null,
                userName: '',
                Nombre: ''
            }
        case 'Login':
            const { Nombre, userName } = action.Payload
            return {
                Validacion: false,
                Token: 'ABC123',
                Nombre,
                userName
            }
            break;
        default:
            return state;
    }
}

export const Login = () => {

    const [{ Validacion, Token, Nombre }, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'Logout' });
        }, 1500);
    }, [])

    const Login = () => {
        dispatch({
            type: 'Login',
            Payload: {
                Nombre: 'Arturo Valdez',
                userName: 'Developer software'
            }
        })
    }
        const Logout = () => {
            dispatch({
                type: 'Logout',
            })
        }
        if (Validacion) {
            return (
                <>
                    <div className='alert alert-info'>Validando...</div>
                </>
            )
        }


        return (
            <>
                <h3>Login</h3>

                {
                    (Token)
                        ? <div className='alert alert-success'>Autennticado como: {Nombre}</div>
                        : <div className='alert alert-danger'>No autenticado</div>
                }

                {
                    (Token)
                        ? <button className='btn btn-danger' onClick={Logout}>Logout</button>
                        : <button className='btn btn-primary' onClick={Login}>Login</button>

                }
            </>
        )
    }
