import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const FormComponent = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const clickBotonIniciar = handleSubmit((data) => {
        navigate('/HomePage');
    });
    return (
        <form onSubmit={clickBotonIniciar} className="card container mt-3 p-1 FormComponent"  >
            <div className="  row justify-content-center ">
                <div className="col-10 d-flex flex-column align-items-center justify-content-center p-4">
                    <h2 className="mb-4">Registro</h2>
                    <form id="loginForm">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label"> Usuario:</label>
                            <input
                                type="text" className="form-control " id="username" name="username"
                                {...register('userName',
                                    {
                                        required: {
                                            value: true,
                                            message: "Introduzca su usuario"
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "El usuario debe tener un mínimo de 10 caracteres"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "El usuario debe tener un máximo de 15 caracteres"
                                        },
                                    })
                                } />
                            {errors.userName && (
                                <span className="text-danger"> {errors.userName.message} </span>
                            )}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                type="password" className="form-control light" id="password" name="password"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: "Introduzca una contraseña"
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "La contraseña debe tener al menos 10 caracteres"
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "La contraseña debe tener un máximo de 15 caracteres"
                                    },
                                })
                                } />
                            {errors.password && (
                                <span className="text-danger"> {errors.password.message} </span>
                            )}
                            

                        </div>
                    </form>
                    <div id="loginMessage" className="mt-3"></div>
                                                    <button onClick={clickBotonIniciar}
                        className="btn btn-outline-light ">Aceptar</button>
                </div>
            </div>
        </form>
    )
}
export default FormComponent;