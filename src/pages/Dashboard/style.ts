import styled from 'styled-components';

export const DivTitle = styled.div `
    color: #06eadd;
    display: flex;
    margin-left: 150px;
    margin-top: 10vh;

    @media(max-width: 574px) {
        margin-left: 10px;
        margin-top: 50px;
    }

    div {
        padding: 10px;
        font-size: 60px;

        @media(max-width: 574px) {
        font-size: 15px;
    }
    }
`

export const Titulo = styled.h1 `
    font-weight: bold;
    font-size: 90px;
    color: #06eadd;
    margin-left: 90px;

    @media(max-width: 574px) {
        font-size: 35px;
        margin-left: 30px;
    }
`
export const Subtitulo = styled.h1 `
    font-size: 60px;
    color: #cfe9f8;

    @media(max-width: 574px) {
        margin-top: 8px;
        font-size: 23px;
    }
`

export const Form = styled.form `
    margin-top: 20px;
    margin-left: 70vh;
    margin-right: 70vh;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 05px 5px 5px;
        color: #3a3a3a;
        font-size: 30px;

        &::placeholder {
            color: #a8a8b3;
        }
    }



            div {
                font-size: 50px;
                margin-top: 10px;

                &:hover {
                    translate: 10px;
                }
            }

        &:hover {
            background: #ffd27e;
        }
    }

    @media(max-width: 574px) {
        margin-left: 27px;
        margin-top: 20px;


        input {
            width: 350px;
            font-size: 20px;
        }
    }
`

export const Dados = styled.div `
        margin-top: 50px;
        margin-left: 200px;
        color: #e6e6e6;


            .primeira {
                display: flex;



            }


            .infos {
                margin-top: 40px;
                display: flex;



                .icons {
                    font-size: 80px;
                }

                & + div {
                    margin-left: 50px;

                }
                strong {
                    margin-top: 2px;
                    margin-left: 10px;
                }
                p {
                    font-size: 45px;
                    margin-top: 25px;
                    margin-left: -75px;
                    color: #8cd98c;
                }
            }

            @media(max-width: 574px) {
            margin-left: 32px;
            margin-top: 20px;
            margin-right: 30px;

            .infos {
                margin-top: 50px;
                margin-left: -100px;
                display: flex;

                .icons {
                    font-size: 40px;
                }

                & + div {
                    margin-left: 20px;
                }
                strong {
                    margin-top: 2px;
                    margin-left: 10px;
                }

                p {
                    font-size: 20px;
                    margin-top: 40px;
                    margin-left: -75px;
                    color: #8cd98c;
                }
            }

            .segunda--celular {
               margin-left: 70px;
           }
        }

`


