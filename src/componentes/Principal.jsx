import React, {useState} from "react";
import * as S from "./Style"

function Principal() {
    const [resultado, setResultado] = useState("0")
    const valores = [];
    console.log(valores);

    function addNamber() {
        if (valores.length === 2) {
            console.log(valores);
            // let num = ''.concat(...valores); outra maneira de concatenar
            let num = valores.join('');
            valores.pop(valores[0]);
            valores.pop(valores[1]);
            console.log(valores);
            valores.push(num);
        }
    }

    function calculo() {
        console.log(valores);
        let resposta = eval(valores[0]);
        setResultado(resposta);
    }

    return (
        <S.Main>
            <S.GlobalStyle/> 
            <S.Section>
                <S.H2>{resultado}</S.H2>
                <S.Div>
                    <S.ButtonDark onClick={() => {valores.push(7); addNamber()}}>7</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(8); addNamber()}}>8</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(9); addNamber()}}>9</S.ButtonDark> 
                    <S.ButtonLight onClick={() => {valores.push(" / "); addNamber()}}>/</S.ButtonLight>
                </S.Div>
                <S.Div>
                    <S.ButtonDark onClick={() => {valores.push(4); addNamber()}}>4</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(5); addNamber()}}>5</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(6); addNamber()}}>6</S.ButtonDark>
                    <S.ButtonLight onClick={() => {valores.push(" x "); addNamber()}}>x</S.ButtonLight>
                </S.Div>
                <S.Div>
                    <S.ButtonDark onClick={() => {valores.push(3); addNamber()}}>3</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(2); addNamber()}}>2</S.ButtonDark>
                    <S.ButtonDark onClick={() => {valores.push(1); addNamber()}}>1</S.ButtonDark>
                    <S.ButtonLight onClick={() => {valores.push(" - "); addNamber()}}>-</S.ButtonLight>
                </S.Div>
                <S.Div>
                    <S.ButtonDark onClick={() => {valores.push(0); addNamber()}}>0</S.ButtonDark>
                    <S.ButtonLight onClick={() => {valores.push("."); addNamber()}}>.</S.ButtonLight>
                    <S.ButtonLight onClick={calculo}>=</S.ButtonLight>
                    <S.ButtonLight onClick={() => {valores.push(" + "); addNamber()}}>+</S.ButtonLight>
                </S.Div>
            </S.Section>
        </S.Main>
    )
}
export default Principal;