import * as React from 'react';
import {useState} from 'react';
import api from "../../Services/api";
import { Titulo, DivTitle, Subtitulo, Form, Dados } from './style'
import { FiActivity } from "react-icons/fi";
import { AiFillAlert } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";


interface CasesData{
    cases: number;
    confirmed: number;
    recovered: number;
    deaths: number;
    country: string;
}


export default function Covid(){
    const [casesData, setCasesData] = useState<CasesData>({} as CasesData);

    async function carregarCasos(countrie: string) {
        const dados = await api.get(`/${countrie}`).then(response => response.data);
        setCasesData({ ...dados.data });

    }


    return (
        <>
            <div className ="Principal">
                <DivTitle>
                    <Titulo>COVID19</Titulo>
                    <div><FiActivity /></div>
                    <Subtitulo>INFORMAÇÕES</Subtitulo>
                </DivTitle>

                <Form>
                    <input
                        // onChange={(e)=> setCountries (e.target.value)}
                        onChange={(e) => carregarCasos(e.target.value)}
                        placeholder="Digite nome do Pais "
                    />

                </Form>

                <Dados>
                    <div className="primeira">
                        <strong>Dados: <p style={{color:'#8cd98c'}}> {casesData.country === undefined ?  'carregando': casesData.country}</p></strong>
                        <div className="infos">
                            <div className="icons"><AiFillAlert /></div>
                            <strong>Casos Ativos:</strong>
                            <p>{casesData.cases === undefined ? 'carregando': casesData.cases}</p>
                        </div>

                        <div className="infos">
                            <div className="icons"><BsCheckAll /></div>
                            <strong>Casos Confirmados:</strong>
                            <p className="confirmados">{casesData.confirmed === undefined ? 'carregando': casesData.confirmed}</p>
                        </div>
                    </div>

                    <div className="primeira segunda--celular">
                        <div className="infos">
                            <div className="icons"><GiHealthNormal /></div>
                            <strong>Casos Recuperados:</strong>
                            <p>{casesData.recovered === undefined ? 'carregando': casesData.recovered}</p>
                        </div>

                        <div className="infos">
                            <div className="icons"><FaSkullCrossbones /></div>
                            <strong>Mortes Confirmadas:</strong>
                            <p className="confirmados">{casesData.deaths === undefined ? 'carregando': casesData.deaths}</p>
                        </div>
                    </div>
                </Dados>
            </div>
        </>
    )

}


