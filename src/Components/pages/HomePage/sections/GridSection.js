import React, { useContext } from 'react';
import { useHistory } from 'react-router';

/*OWN*/
import BackendDataContext from '../../../../Context/BackendDataContext';
import TextEditorText from '../../../TextEditorText/TextEditorText';
import hajanyOProjektu from '../../../../assets/hajany_oprojektu.jpg';
import hajanyLokalita from '../../../../assets/hajany_lokalita.jpg';
import hajanyNabidka from '../../../../assets/hajany_nabidka.jpg';

/*SASS*/
import './GridSection.scss';

const GridSection = ({ page, refProp }) => {

    const aboutProjectSection = page.sections.find((section) => section.id === 1) || {
        title: 'O projektu',
        button: 'Více o projektu',
        content: JSON.stringify({
            blocks: [{
                key: "efam8",
                text: "Jsme rodinná developerská firma. Tentokrát vám přinášíme rodinné domy v jedné z nejžádanějších lokalit v těsné blízkosti Brna. Můžete tak čerpat výhody města a zároveň si užívat rodinný život se zahradou. V nabídce je několik novostaveb, které jsou navřeny architektem přímo pro vás.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [{ offset: 0, length: 32, style: "BOLD" }],
                entityRanges: [],
                data: {}
            }],
            entityMap: {}
        })
    };

    const localitySection = page.sections.find((section) => section.id === 2) || {
        title: 'Lokalita',
        button: 'Více o lokalitě',
        content: JSON.stringify({
            blocks: [{
                key: "efam8",
                text: "Výhody města s vlastní zahradou. To přesně nabízí obec Želešice, kterou si okamžitě zamilujete. Nachází se pouhých 15 minut od Brna a svým obyvatelům poskytuje malebnou přírodu s relaxačním a sportovním vyžitím. Skvělá dostupnost na D1. V obci se nachází základní škola, mateřská škola, obecní úřad, pošta, fotbalové hřiště, dětské hřiště, restaurace, obchod, cukrárna.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [{ offset: 0, length: 32, style: "BOLD" }],
                entityRanges: [],
                data: {}
            }],
            entityMap: {}
        })
    };

    const houseChoiceSection = page.sections.find((section) => section.id === 3) || {
        title: 'Nabídka domů',
        button: 'Nabídka',
        content: JSON.stringify({
            blocks: [{
                key: "efam8",
                text: "Rodinný dům přesně podle vašich představ. Každý dům je navržen architektem tak, aby vám poskytoval co nejlepší bydlení.",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [{ offset: 0, length: 42, style: "BOLD" }],
                entityRanges: [],
                data: {}
            }],
            entityMap: {}
        })
    };

    const blogpostsSection = page.sections.find((section) => section.id === 4) || {
        title: 'Aktuality',
        button: 'Více o aktualitách',
        content: JSON.stringify({
            blocks: [
                {
                    key: "efam8",
                    text: "Buďte v obraze.",
                    type: "unstyled",
                    depth: 0,
                    inlineStyleRanges: [{ offset: 0, length: 15, style: "BOLD" }],
                    entityRanges: [],
                    data: {}
                },
                {
                    key: "9prr4",
                    text: "Přinášíme vám novinky ze stavby a z celého procesu stavění. Buďte u toho s námi od samotného začátku.",
                    type: "unstyled",
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        })
    };

    const history = useHistory();

    return (
        <section className="grid-section" ref={refProp}>
            <div className="side border-bottom" id="side-left-1"></div>
            <div className="text-container border-bottom border-right" id="text-left-1">
                <article className="feature-text-container">
                    <h2 className="feature-heading">{aboutProjectSection.title}</h2>
                    <TextEditorText data={JSON.parse(aboutProjectSection.content)}></TextEditorText>
                    <button className="outlined-button" onClick={() => history.push('/o-projektu')}>{aboutProjectSection.button}</button>
                </article>
            </div>
            <div className="img-container border-top border-right" id="img-right-1">
                <img className="feature-img" src={hajanyOProjektu} alt="O projektu" loading="lazy" />
            </div>
            <div className="side" id="side-right-1"></div>
            <div className="side" id="side-left-2"></div>
            <div className="text-container border-top" id="text-right-2">
                <article className="feature-text-container">
                    <h2 className="feature-heading">{localitySection.title}</h2>
                    <TextEditorText data={JSON.parse(localitySection.content)}></TextEditorText>
                    <button className="outlined-button" onClick={() => history.push('/lokalita')}>{localitySection.button}</button>
                </article>
            </div>
            <div className="img-container border-top border-left" id="img-left-2">
                <img className="feature-img" src={hajanyLokalita} alt="Lokalita" loading="lazy" />
            </div>
            <div className="side" id="side-right-2"></div>
            <div className="side" id="side-left-3"></div>
            <div className="text-container border-top" id="text-left-3">
                <article className="feature-text-container">
                    <h2 className="feature-heading">{houseChoiceSection.title}</h2>
                    <TextEditorText data={JSON.parse(houseChoiceSection.content)}></TextEditorText>
                    <button className="outlined-button" onClick={() => history.push('/nabidka-domu')}>{houseChoiceSection.button}</button>
                </article>
            </div>
            <div className="img-container border-left border-bottom border-right" id="img-right-3">
                <img className="feature-img" src={hajanyNabidka} alt="Nabídka domů" loading="lazy" />
            </div>
            <div className="side border-top" id="side-right-3"></div>
            <div className="side border-top" id="side-left-4"></div>
            <div className="text-container border-top" id="text-right-4">
                <article className="feature-text-container">
                    <h2 className="feature-heading">{blogpostsSection.title}</h2>
                    <TextEditorText data={JSON.parse(blogpostsSection.content)}></TextEditorText>
                    <button className="outlined-button" onClick={() => history.push('/aktuality')}>{blogpostsSection.button}</button>
                </article>
            </div>
            <div className="img-container border-left border-bottom border-right" id="img-left-4">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/Feu1ZdcA80k"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="side border-top" id="side-right-4"></div>
            <div className="helper border-right" id="helper-right"></div>
            <div className="helper border-left" id="helper-left"></div>
        </section>
    );
}

export default GridSection;