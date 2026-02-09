import React, { useEffect, useState } from 'react';
import BlogPost from '../Components/pages/News/BlogPost';
import axios from 'axios';
import { MOCK_NEWS } from '../Containers/backendDataMock';

/*SASS*/
import './scenes.scss';

const News = () => {

    const [blogposts, setBlogPosts] = useState([]);

    const fetchBlogPosts = () => {
        const backendUrl = process.env.REACT_APP_BACKEND_SERVER || 'https://api.moderni-zelesice.cz';
        axios.get(`${backendUrl}/blogposts`)
            .then(res => {
                if (res.data && res.data.blogpost && res.data.blogpost.length > 0) {
                    setBlogPosts(res.data.blogpost);
                } else {
                    setBlogPosts(MOCK_NEWS);
                }
            }).catch(err => {
                console.log(err, "ERROR ON FETCH");
                setBlogPosts(MOCK_NEWS);
            })
    }

    useEffect(() => {
        fetchBlogPosts();
    }, [])

    return (
        <div className="page-container">
            <div className="heading-wrapper">
                <h1 className="page-title">
                    Aktuality
                </h1>
                <div className="border-helper"></div>
            </div>
            <div className="page-content">
                {blogposts.map((bp, index) => {
                    return <BlogPost key={index} blogpost={bp} />
                })}

                <div className="legal-sections-container" style={{ marginTop: '100px', borderTop: '1px solid #eee', paddingTop: '50px' }}>
                    <section id="aml" className="legal-content">
                        <h2>AML - Systém vnitřních zásad</h2>
                        <p><strong>Dnešního dne, měsíce a roku byl společností:</strong><br />
                            Real major, s. r. o., IČO: 27723976<br />
                            se sídlem: Hajany 222, 664 43 Hajany<br />
                            zastoupena Evou Borákovou<br />
                            (dále jen “Realitní zprostředkovatel“)</p>

                        <p>přijat v souladu se zák.č. 253/2008 Sb., v platném znění, následující</p>

                        <h3>SYSTÉM VNITŘNÍCH ZÁSAD</h3>
                        <p>k zajištění povinností vyplývajících ze zák.č. 253/2008 Sb. o některých opatřeních proti legalizaci výnosů z trestné činnosti a financování terorismu</p>

                        <h4>1. Úvodní ustanovení</h4>
                        <p>1.1 Tento Systém vnitřních zásad (dále jako „SVZ“) slouží k zajištění plnění povinností vyplývajících ze zákona č. 253/2008 Sb., o některých opatřeních proti legalizaci výnosů z trestné činnosti a financování terorismu (dále jako „AML zákon“).</p>
                        <p>1.2 Uvedený Systém vnitřních zásad je závazný pro zaměstnance „Realitního zprostředkovatele“ a dále pak pro spolupracující třetí osoby zastupující při činnostech realitního zprostředkování „Realitního zprostředkovatele“ na základě písemné smlouvy nebo plné moci (dále souhrnně jako „Realitní makléř“).</p>

                        <h4>2. Identifikace účastníků obchodu</h4>
                        <p>2.1 U každého obchodu v hodnotě přesahující částku odpovídající ekvivalentu 1.000 EUR provede „Realitní makléř“ identifikaci účastníků obchodu.</p>
                        <p>2.2 Identifikační údaje účastníka obchodu zahrnují jméno, příjmení, rodné číslo, datum narození, místo narození, státní občanství a údaje z průkazu totožnosti.</p>

                        <h4>7. Stanovení osoby určené k zajišťování průběžného styku s FAÚ</h4>
                        <p>7.1 Osobou určenou k zajišťování průběžného styku s „FAÚ“ je za „Realitního zprostředkovatele“: Eva Boráková, pracovní pozice: jednatelka, mob.tel.: 605018056, e-mail: info@realmajor.cz.</p>
                    </section>

                    <section id="gdpr" className="legal-content" style={{ marginTop: '80px' }}>
                        <h2>GDPR - Ochrana osobních údajů</h2>
                        <p><strong>REAL major, s.r.o.</strong>, IČ: 277 23 976, se sídlem Hajany č. p. 222, 664 43 Hajany, sp. zn. C 54751 vedená u Krajského soudu v Brně (dále také jen „zprostředkovatel“)</p>
                        <p>Zprostředkovatel jako správce osobních údajů zpracovává osobní údaje klientů pro řádný výkon své činnosti v souladu s Nařízením EU 2016/679 (GDPR).</p>

                        <h3>Práva klienta</h3>
                        <ul>
                            <li>PRÁVO NA PŘÍSTUP k osobním údajům</li>
                            <li>PRÁVO NA OPRAVU osobních údajů</li>
                            <li>PRÁVO NA VÝMAZ osobních údajů</li>
                            <li>PRÁVO NA OMEZENÍ zpracování</li>
                        </ul>
                        <p>Pro další informace: info@realmajor.cz</p>
                    </section>

                    <section id="building-docs" className="legal-content" style={{ marginTop: '80px' }}>
                        <h2>Poučení o stavební dokumentaci</h2>
                        <h3>POVINNOST PRODÁVAJÍCÍHO MÍT PROJEKTOVOU DOKUMENTACI</h3>
                        <p>Povinnosti vlastníka mít po celou dobu trvání stavby projektovou dokumentaci jsou uvedeny v zák.č. 283/2021 Sb., o územním plánování a stavebním řádu (stavební zákon).</p>
                        <p>Prodávající je povinen odevzdat kupujícímu věc i doklady, které se k věci vztahují (§ 2087 občanského zákoníku). Za nesplnění povinnosti hrozí sankce až do 400.000,- Kč.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default News;