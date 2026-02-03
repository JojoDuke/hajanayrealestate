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

    const aboutProjectSection = page.sections.find((section) => section.id === 1);
    const localitySection = page.sections.find((section) => section.id === 2);
    const houseChoiceSection = page.sections.find((section) => section.id === 3);
    const blogpostsSection = page.sections.find((section) => section.id === 4);

    // MANUAL OVERRIDES TO MATCH PROJECT CURRENT (HAJANY)
    if (localitySection) {
        localitySection.content = JSON.stringify({
            blocks: [
                {
                    key: "efam8",
                    text: "Obec Hajany vám nabízí dokonalou rovnováhu mezi přírodou a pohodlím moderního bydlení. Nachází se pouhých 15 minut od Brna a okouzlí vás klidným prostředím, malebnou přírodou a širokými možnostmi relaxace i sportovního vyžití. Díky skvělé dopravní dostupnosti se snadno dostanete nejen do Brna, ale i na dálnici D1.",
                    type: "unstyled",
                    depth: 0,
                    inlineStyleRanges: [{ offset: 23, length: 62, style: "BOLD" }],
                    entityRanges: [],
                    data: {}
                }
            ],
            entityMap: {}
        });
    }

    if (blogpostsSection) {
        blogpostsSection.button = "Více o aktualitách";
    }

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