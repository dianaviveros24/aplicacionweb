import React, { Component } from "react";
import { connect } from 'react-redux';
import $ from "jquery";
import { Link } from 'react-router-dom';


class TestKolb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerValue4: '',
            answerValue3: '',
            answerValue2: '',
            answerValue1: '',
            contentSpan:''
        };
    }

    handleClick(e) {
        e.preventDefault();
        var answer1 = document.querySelectorAll(".answer1:checked");
        var answer2 = document.querySelectorAll(".answer2:checked");
        var answer3 = document.querySelectorAll(".answer3:checked");
        var answer4 = document.querySelectorAll(".answer4:checked");

        var totalAnswer1 = 0;
        var totalAnswer2 = 0;
        var totalAnswer3 = 0;
        var totalAnswer4 = 0;

        var caEc = totalAnswer2 - totalAnswer1;
        var eaOr = totalAnswer3 - totalAnswer4;

        if (!answer1.length) {
            alert("You didn't select an answer for all questions")
        }
        else {
            answer1.forEach(function (el) {
                totalAnswer1 += parseInt(el.getAttribute('value'));
            });
        }

        if (!answer2.length) {
            alert("You didn't select an answer for all questions")
        }
        else {
            answer1.forEach(function (el) {
                totalAnswer1 += parseInt(el.getAttribute('value'));
            });
            $("#sumatoriaCol2").text(totalAnswer1);
        }

        if (!answer3.length) {
            alert("You didn't select an answer for all questions")
        }
        else {
            answer3.forEach(function (el) {
                totalAnswer3 += parseInt(el.getAttribute('value'));
            });
            $("#sumatoriaCol3").text(totalAnswer3);
        }

        if (!answer4.length) {
            alert("You didn't select an answer for all questions")
        }
        else {
            answer4.forEach(function (el) {
                totalAnswer4 += parseInt(el.getAttribute('value'));
            });
            $("#sumatoriaCol4").text(totalAnswer4);
        }

 
            $("span").each(
                function () {
                    if (caEc < 4 && eaOr > 5) {
                        // document.write('Estilo de aprendizaje acomodador');
                        return $("#estilo").text('Estilo de aprendizaje acomodador');
                    }
                    if (caEc < 4 && eaOr < 6) {
                        // document.write('Estilo de aprendizaje divergente');
                        return $("#estilo").text('Estilo de aprendizaje divergente');
                    }
                    if (caEc > 3 && eaOr > 5) {
                        // document.write('Estilo de aprendizaje convergente');
                        return $("#estilo").text('Estilo de aprendizaje convergente');
                    }
                    if (caEc > 3 && eaOr < 6) {
                        // document.write('Estilo de aprendizaje asimilador');
                        return $("#estilo").text('Estilo de aprendizaje asimilador');
                    }
                });
                const contentSpan =  document.getElementById('estilo').innerText;

    };

    render() {
        return (
            <>
                <section className="o-form-questions">
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando aprendo:</p></div>
                        <div className="col">
                            <div><p>Prefiero valerme de mis sensaciones y sentimientos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_1" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_1" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_1" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_1" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero mirar y atender</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_1" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_1" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_1" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_1" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero pensar en las ideas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_1" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_1" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_1" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_1" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero hacer cosas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_1" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_1" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_1" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_1" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>

                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Aprendo mejor cuando:</p></div>
                        <div className="col">
                            <div><p>Confío en mis corazonadas y sentimientos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_2" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_2" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_2" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_2" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Atiendo y observo cuidadosamente</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_2" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_2" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_2" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_2" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Confio en mis pensamientos lógicos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_2" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_2" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_2" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_2" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Trabajo duramente para que las cosas queden realizadas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_2" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_2" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_2" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_2" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando estoy aprendiendo:</p></div>
                        <div className="col">
                            <div><p>Tengo sentimientos y reacciones fuertes</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_3" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_3" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_3" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_3" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy reservado y tranquilo</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_3" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_3" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_3" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_3" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Busco razonar sobre las cosas que están sucediendo</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_3" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_3" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_3" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_3" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Me siento responsable de las cosas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_3" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_3" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_3" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_3" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Aprendo a través de:</p></div>
                        <div className="col">
                            <div><p>Sentimientos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_4" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_4" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_4" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_4" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Observaciones</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_4" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_4" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_4" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_4" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Razonamientos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_4" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_4" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_4" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_4" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Acciones</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_4" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_4" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_4" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_4" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando aprendo:</p></div>
                        <div className="col">
                            <p>Estoy abierto a nuevas experiencias</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_5" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_5" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_5" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_5" type="checkbox" value="1"></input>
                            </div>
                            <p>Tomo en cuenta todos los aspectos relacionados</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_5" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_5" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_5" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_5" type="checkbox" value="1"></input>
                            </div>
                            <p>Prefiero analizar las cosas dividiendolas en sus partes</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_5" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_5" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_5" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_5" type="checkbox" value="1"></input>
                            </div>
                            <p>Prefiero hacer las cosas directamente</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_5" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_5" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_5" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_5" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando estoy aprendiendo:</p></div>
                        <div className="col">
                            <div><p>Soy una persona intuitiva</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_6" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_6" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_6" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_6" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona observadora</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_6" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_6" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_6" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_6" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona lógica</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_6" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_6" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_6" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_6" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona activa</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_6" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_6" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_6" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_6" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Aprendo mejor a través de:</p></div>
                        <div className="col">
                            <div><p>Las relaciones con mis compañeros</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_7" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_7" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_7" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_7" type="checkbox" value="1"></input>
                            </div>
                            <p>La observación</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_7" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_7" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_7" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_7" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Teorías racionales</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_7" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_7" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_7" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_7" type="checkbox" value="1"></input>
                            </div>
                            <div><p>La práctica de los temas tratados</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_7" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_7" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_7" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_7" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando aprendo:</p></div>
                        <div className="col">
                            <div><p>Me siento involucrado en los temas tratados</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_8" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_8" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_8" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_8" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Me tomo mi tiempo antes de actuar</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_8" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_8" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_8" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_8" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero las teorías y las ideas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_8" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_8" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_8" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_8" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero ver los resultados a través de mi propio trabajo</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_8" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_8" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_8" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_8" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Aprendo mejor cuando:</p></div>
                        <div className="col">
                            <div><p>Me baso en mis intuiciones y sentimientos</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_9" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_9" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_9" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_9" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Me baso en observaciones personales</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_9" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_9" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_9" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_9" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Tomo en cuenta mis propias ideas sobre el tema</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_9" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_9" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_9" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_9" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Pruebo personalmente la tarea</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_9" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_9" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_9" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_9" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando estoy aprendiendo:</p></div>
                        <div className="col">
                            <div><p>Soy una persona abierta</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_10" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_10" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_10" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_10" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona reservada</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_10" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_10" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_10" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_10" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona racional</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_10" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_10" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_10" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_10" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy una persona responsable</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_10" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_10" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_10" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_10" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Cuando Aprendo:</p></div>
                        <div className="col">
                            <div><p>Me involucro</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_11" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_11" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_11" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_11" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero observar</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_11" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_11" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_11" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_11" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Prefiero evaluar las cosas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_11" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_11" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_11" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_11" type="checkbox" value="1"></input>
                            </div>
                            <p>Prefiero asumir una actitud activa</p>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_11" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_11" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_11" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_11" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>
                    <section className="col d-flex o-question-section">
                        <div className="col-md-5"><p>Aprendo mejor cuando:</p></div>
                        <div className="col">
                            <div><p>Soy receptivo y de mente abierta</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton1_12" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton1_12" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton1_12" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton1_12" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy cuidadoso</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton2_12" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton2_12" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton2_12" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton2_12" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Analizo las ideas</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton3_12" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton3_12" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton3_12" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton3_12" type="checkbox" value="1"></input>
                            </div>
                            <div><p>Soy práctico</p></div>
                            <div className="o-answers">
                                4<input className="answer4" name="checkboxButton4_12" type="checkbox" value="4"></input>
                                3<input className="answer3" name="checkboxButton4_12" type="checkbox" value="3"></input>
                                2<input className="answer2" name="checkboxButton4_12" type="checkbox" value="2"></input>
                                1<input className="answer1" name="checkboxButton4_12" type="checkbox" value="1"></input>
                            </div>
                        </div>
                    </section>

                    {/*                 <div className="o_resultContent">
                    <p>sumatoria</p>
                    <div className="o_answerContent"><label>EC col1 </label><span id="sumatoriaCol1"> 0</span></div>
                    <div className="o_answerContent"> <label>CA col2 </label><span id="sumatoriaCol2"> 0</span></div>
                    <div className="o_answerContent"><label>EA col3 </label><span id="sumatoriaCol3"> 0</span></div>
                    <div className="o_answerContent"><label>OR col4 </label><span id="sumatoriaCol4"> 0</span></div>
                    <div className="o_sumContent"><label>Total </label><span id="sumatoriaCol"> 0</span></div>
                </div> */}
                    <h4><span id="estilo"></span>
                    </h4>
                    <div className="o-action-button col">
                        <a className="calcular" onClick={this.handleClick}>Conocer mi estilo de aprendizaje</a>
                    </div>
                    <Link className="nav-link" href="#Game" to="/game">Continuar</Link>

                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        contentSpan : state.contentSpan
    };
};

export default connect(mapStateToProps, null)(TestKolb);

