import React from "react";
import '../styles/Login.css';

const Login = () => {

document.querySelector('body').addEventListener('mousemove',
eyeball);

function eyeball(event){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) +
        (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) +
        (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)"
    })
}

    return(
        <React.Fragment>
        <body className="body">
        <div className="login">
            <h1 className="hello">
            <span className="text">Hello welcome to my</span>
            <span className="text2">page,please put your</span>
            <span className="text3">name.</span>
            </h1>

            <div className="panda">
                    <div className="oreja1"></div>
                    <div className="oreja2"></div>
                    <div className="cabeza"></div>
                    <div className="ojo1"></div>
                    <div className="ojo2"></div>
                    <div className="trompa"></div>
                    <div className="nariz"></div>
                    <div className="boca1"></div>
                    <div className="boca2"></div>
                    <div className="eye"></div>
                    <div className="eye"></div>
            </div>

            <form className="form" action="">
                <div   className="box">
                    <input id="name" name="texto" type={"text"} required
                     className="form__input"></input>
                    <label for="name" className="label">Nombre:</label>
                </div>
                <input className="link" type={'submit'} value='Enviar' ></input>
                <div className="boca3">
                <div className="smile"></div>
                    <div className="diente1"></div>
                    <div className="diente1"></div>
                    <div className="diente1"></div>
                    <div className="diente2"></div>
                    <div className="diente3"></div>
                    <div className="smile1"></div>
                    <div className="nariz1"></div>
                    <div className="chapis"></div>
                </div>
            </form>
        </div>
        </body>
        </React.Fragment>
    );
}; 

export default Login;