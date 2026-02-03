import React, { useContext } from 'react';
import BackendDataContext from '../../../Context/BackendDataContext';
import { ImageViewerContext } from '../../../Context/ImageViewerContext';
import ImageGallery from '../../ImageGallery/ImageGallery';
import aboutHajany1 from '../../../assets/img/AboutProject/about_hajany_1.jpg';
import aboutHajany2 from '../../../assets/img/AboutProject/about_hajany_2.jpg';
import aboutHajany3 from '../../../assets/img/AboutProject/about_hajany_3.jpg';
import pastProject1 from '../../../assets/img/AboutProject/past_project_1.png';
import pastProject2 from '../../../assets/img/AboutProject/past_project_2.jpg';
import pastProject3 from '../../../assets/img/AboutProject/past_project_3.jpg';

/*SASS*/
import './AboutProjectPage.scss';
import TextEditorText from '../../TextEditorText/TextEditorText';

const AboutProjectPage = ({ page }) => {

    const { currentState } = useContext(BackendDataContext);
    const { setImageViewerOpen, setImageViewerConfig } = useContext(ImageViewerContext);

    const pages = [...currentState.pages];
    const images = pages.find(page => page.id === 2).sections[0].images;

    const hajanyContent = {
        blocks: [
            { key: "p1", text: "Patrové domy 5+kk s dvojgaráží, velkou terasou a chytrými technologiemi.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "p2", text: "Každý dům má obytnou plochu 200 m², pozemky 465-524 m² a je vybaven nejmodernějšími technologiemi pro komfortní a úsporné bydlení.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "p3", text: "Celý projekt je koncipován jako moderní a úsporné bydlení, které kombinuje špičkové technologie s komfortem a soukromím.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "s1", text: "", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "h1", text: "Technologie a vybavení", type: "unstyled", depth: 0, inlineStyleRanges: [{ offset: 0, length: 22, style: "BOLD" }], entityRanges: [], data: {} },
            { key: "l1", text: "•    Chytrá domácnost Loxone – automatizace vytápění, osvětlení, zabezpečení a dalších funkcí", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l2", text: "•    Fotovoltaická elektrárna s bateriovým úložištěm – ekologický a úsporný provoz", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l3", text: "•    Úsporné elektrické podlahové vytápění – inteligentní regulace s propojením na FVE", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l4", text: "•    Hliníková okna s trojsklem a elektrickými žaluziemi", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l5", text: "•    Luxusní oplocení Luxline – z přední a boční strany (zadní část lze řešit individuálně: Luxline plot s brankou nebo pletivo)", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l6", text: "•    Umělý val za domy osázený zelení – zajišťuje soukromí, eliminuje hluk z komunikace Hajany–Ořechov a vytváří výhled do zeleně", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "l7", text: "•    Možnost vstupu brankou ze zahrady přímo do přírody", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "s2", text: "", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} },
            { key: "p4", text: "Realizaci zajišťuje Real Major s.r.o., naše firma se sídlem přímo v Hajanech, s dlouholetými zkušenostmi v oblasti výstavby moderních rodinných domů.", type: "unstyled", depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }
        ],
        entityMap: {}
    };

    const carImages = images.slice(0, 3).map(image => (process.env.REACT_APP_BACKEND_SERVER || "https://api.moderni-hajany.cz") + image);
    const renderImages = [aboutHajany1, aboutHajany2, aboutHajany3];
    const pastProjectImages = [pastProject1, pastProject2, pastProject3];

    const photoList = [
        ...carImages,
        ...renderImages,
        ...pastProjectImages
    ];

    const openPopUp = (index) => {
        setImageViewerConfig({ images: [...photoList], currentImage: index });
        setImageViewerOpen(true);
    }

    return (
        <>
            <div className="about-page-container">
                <section className="about-project-section">
                    <div className="about-text-editor-container">
                        <TextEditorText data={hajanyContent}></TextEditorText>
                    </div>
                </section>

                <section className="about-project-section" style={{ paddingTop: 0, paddingBottom: 0, marginBottom: '0.5rem' }}>
                    <div className="hajany-imgs-container">
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(0)}>
                            <img src={carImages[0]} alt="Hajany project - car" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(1)}>
                            <img src={carImages[1]} alt="Hajany project - car" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(2)}>
                            <img src={carImages[2]} alt="Hajany project - car" />
                        </div>
                    </div>
                </section>

                <section className="about-project-section" style={{ paddingTop: 0, marginTop: 0 }}>
                    <div className="hajany-imgs-container reverse-layout" style={{ marginTop: 0 }}>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(3)}>
                            <img src={aboutHajany1} alt="Hajany rendering" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(4)}>
                            <img src={aboutHajany2} alt="Hajany rendering" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(5)}>
                            <img src={aboutHajany3} alt="Hajany rendering" />
                        </div>
                    </div>
                </section>

                <section className="about-hajany-section">
                    <h1>
                        Minulý projekt:
                    </h1>
                    <p>
                        Pokud byste si rádi prohlédli domy v Hajanech a získali přesnější představu o naší práci, klikněte níže.
                    </p>
                    <div className="buttons-container-hajany">
                        <a href="https://www.realmajor.cz" target="_blank" rel="noreferrer"><button className="outlined-button">Více o projektu Moderní Hajany</button></a>
                        <a href="https://www.moderni-zelesice.cz" target="_blank" rel="noreferrer"><button className="outlined-button">Více o projektu Moderní Želešice</button></a>
                    </div>
                    <div className="hajany-imgs-container second-reverse-layout" style={{ marginTop: '40px' }}>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(6)}>
                            <img src={pastProject1} alt="Past project rendering" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(7)}>
                            <img src={pastProject2} alt="Past project rendering" />
                        </div>
                        <div className="gallery-single-img-wrapper" onClick={() => openPopUp(8)}>
                            <img src={pastProject3} alt="Past project rendering" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AboutProjectPage;