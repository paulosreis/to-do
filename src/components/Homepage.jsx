import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, DataSnapshot, remove, update } from "firebase/database";

import './homepage.css';

function Homepage() {
    const [isAdd, setIsAdd] = useState(false);
    const [todo, setTodo] = useState("");
    const [listTodos, setListTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUidd, setTempUidd] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                    setListTodos([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).map(todo => {
                            setListTodos((oldArray) => [...oldArray, todo]);
                        })
                    }
                })
            } else if (!user) {
                navigate("/");
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    // Crud
    // Adiciona todo à conta do usuario
    const writeToDatabase = (e) => {
        e.preventDefault();
        const uidd = uid();

        if (todo === '') {
            alert('Por favor, insira um nome para a tarefa!');
            return;
        }
        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
            todo: todo,
            uidd: uidd,
            completed: false

        });
        setTodo("");
    };

    // Edita todo
    const handleUpdate = (todo) => {
        if (!isAdd) {
            toggleAdd();
        }
        setIsEdit(true);
        setTodo(todo.todo);
        setTempUidd(todo.uidd);

    };

    const handleEditConfirm = () => {
        if (todo === '') {
            alert('Por favor, insira um nome para a tarefa!');
            return;
        }
        update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
            todo: todo,
            tempUidd: tempUidd
        });
        setTodo("");
        setIsEdit(false);
        toggleAdd();
    };

    // Apaga todo do banco de acordo com o uid
    const handleDelete = (uid) => {
        remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
    };


    // Funcionalidades
    // Alterna estado (completed ou !completed)

    const toggleComplete = (todo) => {
        update(ref(db, `/${auth.currentUser.uid}/${todo.uidd}`), {
            completed: !todo.completed
        });
    };

    const toggleAdd = () => {
        isAdd ? setIsAdd(false) : setIsAdd(true);
        setTodo("");
        setIsEdit(false);
    };

    return (
        <div>
            <header>
                <h2>To-do</h2>
                <button onClick={handleSignOut}>
                    <span className="material-icons-outlined md-32 white">
                        logout
                    </span>
                </button>
            </header>

            <main className="todo-container">
                <h1>To-do</h1>

                {/* Barra de Pesquisa*/}
                <section id="toolbar">
                    <div id="search">
                        {/* <!-- <h3>Pesquisar:</h3> --> */}
                        <form>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Buscar tarefa"
                            />
                            <span id="icon-search" className="material-icons-outlined md-32">search</span>
                            <button id="erase-button" className="hide">
                                <span className="material-icons-outlined">backspace</span>
                            </button>
                        </form>
                    </div>

                    <div id="filter">
                        {/* <!-- <h3>Filtrar:</h3> --> */}
                        <div className="filter-select">
                            <span className="material-icons-outlined icon-filter md-32">filter_list</span>
                            <select id="filter-select">
                                <option value="all">Todas</option>
                                <option value="done">Feitas</option>
                                <option value="todo">A fazer</option>
                            </select>

                        </div>
                    </div>
                </section>


                {/* Lista de tarefas no meio do card  */}
                <section id="todo-list" >
                    {
                        listTodos.map(todo => (
                            <div className={todo.completed ? 'todo done' : 'todo'}>
                                <div className="card-info">
                                    <button className="finish-todo" onClick={() => toggleComplete(todo)}>
                                        <span className="material-icons-outlined md-32">{todo.completed ? 'check_box' : 'check_box_outline_blank'}</span>
                                    </button>
                                    <h4 className="edit-todo" onClick={() => handleUpdate(todo)}>{todo.todo}</h4>
                                </div>

                                <button className="remove-todo"
                                    onClick={() => handleDelete(todo.uidd)}>
                                    <span className="material-icons-outlined md-32">delete</span>
                                </button>
                            </div>

                        ))
                    }
                </section>




                {isAdd ? (<>

                    {isEdit ? (
                        // editar todo
                        <form className="form-control">
                            <input
                                autoFocus
                                type="text"
                                id="todo-edit"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                            />
                            <button type="submit" onClick={handleEditConfirm}>
                                <span className="material-icons-outlined md-32">done</span>
                            </button>
                            <button id="cancel-edit-button" onClick={toggleAdd}>
                                <span className="material-icons-outlined md-32">close</span>
                            </button>
                        </form>

                    ) : (
                        // inserir todo
                        <form className="form-control">
                            <input
                                autoFocus
                                type="text"
                                id="todo-input"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                placeholder="Insira o nome da tarefa..."
                            />
                            <button type="submit" onClick={writeToDatabase}>
                                <span className="material-icons-outlined md-32">done</span>
                            </button>
                            <button id="cancel-input-button" onClick={toggleAdd}>
                                <span className="material-icons-outlined md-32">close</span>
                            </button>
                        </form>

                    )}

                </>) : (

                    <button id="button-input-task" onClick={toggleAdd}>
                        <span className="material-icons-outlined md-64">add_circle</span>
                    </button>
                )}





            </main>

        </div>
    )
}

export default Homepage;