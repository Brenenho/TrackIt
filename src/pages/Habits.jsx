import styled from "styled-components"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import { useContext } from 'react';
import { useEffect } from "react";
import Context from '../Context';
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'



export default function Habits() {

    const Days = [`D`, `S`, `T`, `Q`, `Q`, `S`, `S`]
    const [DiasSelecionados, setDiasSelecionados] = useState([]);
    const [NameHabit, setNameHabit] = useState("");
    const { foto, setFoto, token, } = useContext(Context)
    const [Habitos, SetHabitos] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(url, config);

        promise.then(resposta => {

            SetHabitos(resposta.data)
            

        });
        promise.catch(erro => console.log(erro.response.data));
    }, []);


    const handleAssentoClick = (DiaSelecionado) => {

        const isSelected = DiasSelecionados.includes(DiaSelecionado);


        if (isSelected) {

            setDiasSelecionados(DiasSelecionados.filter(a => a !== DiaSelecionado));
        } else {

            setDiasSelecionados([...DiasSelecionados, DiaSelecionado]);

        }

    }



    const [started, setStarted] = useState(false);

    function AddHabit() {
        setStarted(true);
    }

    function CancelAddHabit() {
        setStarted(false);
    }

    function SendHabit(e) {
        e.preventDefault();

        if (DiasSelecionados.length === 0) {
            alert('Selecione pelo menos um dia!');
            return;
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const novo = { name: NameHabit, days: DiasSelecionados }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.post(URL, novo, config);
        setLoad(true)


        promise.then(resposta => {
            
            setLoad(false)
            setStarted(false);
            setDiasSelecionados([])
            setNameHabit("")




            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const promise = axios.get(url, config);

            promise.then(resposta => {

                SetHabitos(resposta.data)
                

            });
            promise.catch(erro => console.log(erro.response.data));


        });

        promise.catch(erro => {
            console.log(token)
            alert(erro.response.data.message)
        });
    }

    function DeleteHabit(Habito) {

        const Confirm = confirm("Você tem certeza?")

        if (Confirm) {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${Habito.id}`



            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const promise = axios.delete(URL, config);
            


            promise.then(resposta => {
                

                const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                const promise = axios.get(url, config);

                promise.then(resposta => {

                    SetHabitos(resposta.data)
                    

                });
                promise.catch(erro => console.log(erro.response.data));


            });

            promise.catch(erro => {
                console.log(token)
                alert(erro.response.data.message)
            });
        } else {
            return
        }

    }


    return (

        <>
            <Container>

                <NavBar foto={foto} />
                <ContentMain>

                    <SuperiorTitle>
                        <Titulo>
                            Meus Hábitos
                        </Titulo>
                        <Button onClick={AddHabit}>
                            +
                        </Button>
                    </SuperiorTitle>




                    {started ? (
                        <form onSubmit={SendHabit} >
                            <CardHabit>

                                <input
                                    type="text"
                                    placeholder="nome do hábito"
                                    required
                                    value={NameHabit}
                                    onChange={(e) => setNameHabit(e.target.value)}
                                />
                                <ButtonsDays>
                                    {Days.map((Dia, index) => (

                                        <ButtonDays disabled={load} type="button" isSelected={DiasSelecionados.includes(index)} onClick={() => handleAssentoClick(index)}>{Dia}</ButtonDays>

                                    )
                                    )}
                                </ButtonsDays>

                                <ButtonsAction>

                                    <CancelButton onClick={CancelAddHabit}>
                                        Cancelar
                                    </CancelButton>
                                    <SaveButton load={load} type="submit">
                                        {load == true ? (
                                            <ThreeDots
                                                width="43"
                                                height="11"
                                                radius="9"
                                                color="#FFFFFF"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClassName=""
                                                visible={true}
                                            />
                                        ) : ("Salvar")}
                                    </SaveButton>
                                </ButtonsAction>

                            </CardHabit>
                        </form>) : ("")}

                    {Habitos.length != 0 ? (
                        <>
                            {
                                Habitos.map((Habito, index) => (



                                    < HabitoSaved >

                                        <p>{Habito.name}</p>


                                        <ButtonsDays>
                                            {Days.map((Dia, index) => (

                                                <ButtonDays type="button" isSelected={Habito.days.includes(index)}>{Dia}</ButtonDays>

                                            )
                                            )}
                                        </ButtonsDays>

                                        <img onClick={() => DeleteHabit(Habito)} src="https://media.discordapp.net/attachments/931340188024713226/1115183737374777364/image.png" alt="" />
                                    </HabitoSaved>

                                )
                                )
                            }


                        </>

                    ) : (

                        <SubTitulo>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </SubTitulo>



                    )}




                </ContentMain>
                <Footer />
            </Container >
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
    /* identical to box height */


    color: #126BA5;
    
`

const SubTitulo = styled.p`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;


`

const Button = styled.div`

width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
justify-content: center;
align-items: center;


    


    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    
    /* identical to box height */

    

    color: #FFFFFF;

    outline: none;
    border: none;

`

const SuperiorTitle = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 28px;

`

const CardHabit = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 28px;
    padding: 18px;
    box-sizing: border-box;

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding:0 11px;
        box-sizing: border-box;
        &::placeholder {
            
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            display: flex;
            align-items: center;
        }
    }

`

const ButtonDays = styled.button`
width: 30px;
height: 30px;


border: 1px solid ${props => (props.isSelected ? `#CFCFCF` : `#D5D5D5`)};         // Essa cor deve mudar
background-color: ${props => (props.isSelected ? `#CFCFCF` : `#FFFFFF`)};    // Essa cor deve mudar
border-radius: 5px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */
display: flex;
justify-content: center;
align-items: center;

color: ${props => (props.isSelected ? `#FFFFFF` : `#DBDBDB`)};


`

const ButtonsDays = styled.div`

    width: 234px;
    height: 30px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;



`

const ButtonsAction = styled.div`
    
    
    height: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 29px;
    gap: 8px


`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => (props.load ? `0.7` : `1`)};
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;
    border: none;
    color: #FFFFFF;
`

const CancelButton = styled.button`

    width: 84px;
    height: 35px;
    background: #FFFFFF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;
    border: none;
    color: #52B6FF;
`

const HabitoSaved = styled.div`
    width: 340px;
    height: 91px;
    position: relative;
    background: #FFFFFF;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 10px;
    box-sizing: border-box;
    z-index: 1;
    
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
       margin-top: 13px;


        color: #666666;
    }

    img {
        width: 13px;
        height: 15px;
        position: absolute ;
        top: 11px;
        right: 10px;
    }


`
