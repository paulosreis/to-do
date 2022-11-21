import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword, onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

import './welcome.css';

function Welcome() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [registerInformation, setRegisterInfomartion] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/homepage");
            }
        });
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/homepage')
            })
            .catch((err) =>
                alert(err.message)
            );
    };

    const handleRegister = () => {
        if (registerInformation.email !== registerInformation.confirmEmail) {
            alert("Confirmação de email diferente do principal")
            return
        } else if (registerInformation.password !== registerInformation.confirmPassword) {
            alert("Confirmação de senha diferente da principal")
            return
        }
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password)
            .then(() => {
                navigate('/homepage')
            })
            .catch((err) =>
                alert(err.message)
            );
    };

    return (
        <div className="welcome">

            <main className="container-login">
                <h1 className="titulo">To-do</h1>
                <div className="main-form">
                    {isRegistering ? (

                        <div className="form-register">
                            <h3 className="criar-conta">Criar nova conta</h3>
                            <div>
                                <input
                                    id="email-address-register"
                                    name="email"
                                    type="email"
                                    value={registerInformation.email}
                                    onChange={(e) =>
                                        setRegisterInfomartion({
                                            ...registerInformation,
                                            email: e.target.value
                                        })
                                    }
                                    autoComplete="email"
                                    required
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <input
                                    id="email-address-confirm"
                                    name="email"
                                    type="email"
                                    value={registerInformation.confirmEmail}
                                    onChange={(e) =>
                                        setRegisterInfomartion({
                                            ...registerInformation,
                                            confirmEmail: e.target.value
                                        })
                                    }
                                    autoComplete="email"
                                    required
                                    placeholder="Confirmar email"
                                />
                            </div>
                            <div>
                                <input
                                    id="password-register"
                                    name="password"
                                    type="password"
                                    value={registerInformation.password}
                                    onChange={(e) =>
                                        setRegisterInfomartion({
                                            ...registerInformation,
                                            password: e.target.value
                                        })
                                    }
                                    autoComplete="current-password"
                                    required
                                    placeholder="Senha"
                                />
                            </div>
                            <div>
                                <input
                                    id="password-confirm"
                                    name="password-confirm"
                                    type="password"
                                    value={registerInformation.confirmPassword}
                                    onChange={(e) =>
                                        setRegisterInfomartion({
                                            ...registerInformation,
                                            confirmPassword: e.target.value
                                        })
                                    }
                                    autoComplete="current-password"
                                    required
                                    placeholder="Confirmar senha"
                                />
                            </div>
                            <button className="botao-registrar" onClick={handleRegister}>Registrar</button>
                            <button className="botao-cancelar" onClick={() => setIsRegistering(false)}>Cancelar</button>
                        </div>

                    ) : (

                        <div className="form-login">
                            <div>
                                <input
                                    id="email-address-login"
                                    name="email"
                                    type="email"
                                    onChange={handleEmailChange}
                                    value={email}
                                    autoComplete="email"
                                    required
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password-login"
                                    type="password"
                                    onChange={handlePasswordChange}
                                    value={password}
                                    autoComplete="current-password"
                                    required
                                    placeholder="Senha"
                                />
                            </div>
                            <button type="submit" className="botao-entrar"onClick={handleSignIn}>Entrar</button>
                            <button className="criar-conta"onClick={() => setIsRegistering(true)}>Criar uma conta</button>
                        </div>

                    )}
                </div>

            </main>









        </div>
    )
}

export default Welcome;