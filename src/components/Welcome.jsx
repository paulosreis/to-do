import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword, onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

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


            <h1>Seja bem vindo</h1>


            <div className="main-form">
                {isRegistering ? (

                    <div className="form-register">
                        <h3>Faça seu cadastro</h3>
                        <div>
                            <input
                                id="email-address"
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
                                id="password"
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
                        <button onClick={handleRegister}>Registrar</button>
                        <button onClick={() => setIsRegistering(false)}>Cancelar</button>
                    </div>

                ) : (

                    <div className="form-login">
                        <div>
                            <input
                                id="email-address"
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
                                name="password"
                                type="password"
                                onChange={handlePasswordChange}
                                value={password}
                                autoComplete="current-password"
                                required
                                placeholder="Senha"
                            />
                        </div>
                        <button onClick={handleSignIn}>Entrar</button>
                        <button onClick={() => setIsRegistering(true)}>Criar uma conta</button>
                    </div>

                )}
            </div>






        </div>
    )
}

export default Welcome;