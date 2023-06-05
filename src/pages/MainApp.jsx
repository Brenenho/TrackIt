import styled from "styled-components"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import { useContext } from 'react';
import { useEffect } from "react";
import Context from '../Context';
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // Importe o local específico para o português do Brasil

// Defina o local como 'pt-br'



export default function MainApp() {

    const [Habitos, SetHabitos] = useState([])
    const { foto, setFoto, token, setToken, porcentagemConcluida, setPorcentagemConcluida } = useContext(Context)
    dayjs.locale('pt-br');
    const dataAtual = dayjs().format('DD/MM');
    const [totalHabitos, setTotalHabitos] = useState(0);
    const [habitosConcluidos, setHabitosConcluidos] = useState(0);
    
    const porcentagemConcluida1 = Math.round((habitosConcluidos / totalHabitos) * 100);
    setPorcentagemConcluida(porcentagemConcluida1)



    const nomesDiasSemana = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];

    const diaDaSemanaAtual = nomesDiasSemana[dayjs().day()];



    useEffect(() => {

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(url, config);

        promise.then(resposta => {

            SetHabitos(resposta.data)
            setTotalHabitos(resposta.data.length);
            const concluidos = resposta.data.filter(habito => habito.done);
            setHabitosConcluidos(concluidos.length);


        });
        promise.catch(erro => console.log(erro.response.data));
    }, []);


    function CheckBox(HabitoSelecionado) {

        
        if (HabitoSelecionado.done) {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitoSelecionado.id}/uncheck`

            const novo = {}

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const promise = axios.post(URL, novo, config);



            promise.then(resposta => {
                

                const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const promise = axios.get(url, config);

                promise.then(resposta => {

                    SetHabitos(resposta.data)
                    
                    setTotalHabitos(resposta.data.length);
                    const concluidos = resposta.data.filter(habito => habito.done);
                    setHabitosConcluidos(concluidos.length);

                });
                promise.catch(erro => console.log(erro.response.data));


            });

            promise.catch(erro => {
                alert(erro.response.data.message)
            });

        } else {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${HabitoSelecionado.id}/check`

            const novo = {}

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const promise = axios.post(URL, novo, config);



            promise.then(resposta => {
                

                const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const promise = axios.get(url, config);

                promise.then(resposta => {

                    SetHabitos(resposta.data)
                    setTotalHabitos(resposta.data.length);
                    const concluidos = resposta.data.filter(habito => habito.done);
                    setHabitosConcluidos(concluidos.length);


                });
                promise.catch(erro => console.log(erro.response.data));


            });

            promise.catch(erro => {
                alert(erro.response.data.message)
            });



        }



    }

    return (

        <>
            <Container>
                <NavBar foto={foto} />

                <ContentMain>
                    <Titulo data-test="today">
                        {`${diaDaSemanaAtual}, ${dataAtual}`}
                    </Titulo>
                    <SubTitulo ata-test="today-counter" habitosConcluidos={habitosConcluidos}>
                     {habitosConcluidos != 0 ? `${porcentagemConcluida}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}   
                    </SubTitulo>


                    {Habitos.length != 0 ? (
                        <>
                            {
                                Habitos.map((Habito, index) => (



                                    <Card data-test="today-habit-container" isDone={Habito.done}>
                                        <div>
                                            <TituloCard data-test="today-habit-name">{Habito.name}</TituloCard>
                                            <Sequencia data-test="today-habit-sequence" isDone={Habito.done} >Sequência atual: <span> {`${Habito.currentSequence}`} {Habito.currentSequence == 1 ? "dia" : "dias"}</span></Sequencia>
                                            <Recorde data-test="today-habit-record" isDone={Habito.done} isRecord={parseInt(Habito.currentSequence) >= parseInt(Habito.highestSequence) && Habito.currentSequence > 0} >Seu recorde:<span> {`${Habito.highestSequence}`} {Habito.highestSequence == 1 ? "dia" : "dias"}</span></Recorde>
                                        </div>
                                        <Check data-test="today-habit-check-btn" onClick={() => CheckBox(Habito)} isDone={Habito.done} >
                                            <img src="https://media.discordapp.net/attachments/931340188024713226/1113687254762799104/image.png" alt="" />
                                        </Check>
                                    </Card>

                                )
                                )
                            }


                        </>

                    ) : (

                        <SubTitulo1>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </SubTitulo1>



                    )}






                </ContentMain>

                <Footer />

            </Container>
        </>
    )
}





const Container = styled.div`
    background-color: #F2F2F2;
    height: calc(100vh - 70px);
    width: 100%;
    overflow-y: auto;
`


const ContentMain = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 28px;
    padding-bottom: 70px;
    padding-top: 70px;
    padding-left: 18px;
    padding-right: 18px;
    box-sizing: border-box;
    
    
`

const Titulo = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    width: 180px;
    height: 29px;
    color: #126BA5;
`

const SubTitulo = styled.p`
    width: 278px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 28px;
    color: ${props => (props.habitosConcluidos != 0 ? `#8FC549` : `#BABABA`)};

`
const SubTitulo1 = styled.p`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;


`
const Card = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
`

const TituloCard = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        width: auto;
        height: 25px;
        color: #666666;        

`
const Sequencia = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        margin-top: 7px;
        color: #666666;

        span {
            color: ${props => (props.isDone ? `#8FC549` : `#666666`)};
        }

`
const Recorde = styled.p`

font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;

        span {
            color: ${props => (props.isDone && props.isRecord ? `#8FC549` : `#666666`)};
        }

`

const Check = styled.div`
    width: 69px;
    height: 69px;
    background: ${props => (props.isDone ? `#8FC549` : `#EBEBEB`)};
    border: 1px solid ${props => (props.isDone ? `#8FC549` : `#E7E7E7`)}; ; 
    border-radius: 5px;
    display: flex;
        justify-content: center;
        align-items: center;


    img {       
            width: 35px;
            height: 28px;
        }
`
