
import React, { useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/* OWN */
import * as Scene from './Scenes';
import CustomImageViewer from './Components/CustomImageViewer/CustomImageViewer';
import Drawer from './Components/Navigation/Drawer';
import Layout from './Components/Layout/Layout';
import BackendDataContext from './Context/BackendDataContext';
import { FETCH_HOUSES, FETCH_PAGES } from './Containers/backendDataReducer';
import axios from 'axios';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


const App = () => {

  const { currentState, dispatch } = useContext(BackendDataContext);


  function formatNumber(amount, decimalCount = 0, decimal = ",", thousands = "\xa0") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + "\xa0Kč";
    } catch (e) {
      console.log(e)
    }
  };

  const fetchPagesAndHouses = () => {

    axios.get(process.env.REACT_APP_BACKEND_SERVER + '/houses')
      .then(res => {
        let formatedHouses = res.data.houses.map((house) => {
          let formatedHouse = { ...house };
          formatedHouse.price = formatNumber(house.price, 0, ",", '\xa0')
          formatedHouse.lot_area = house.lot_area + " m²";
          formatedHouse.floor_area = house.floor_area + " m²";
          formatedHouse.builtup_area = house.builtup_area + " m²";
          return formatedHouse;
        });
        formatedHouses.sort((a, b) => { return a.id - b.id });

        dispatch({
          type: FETCH_HOUSES,
          houses: formatedHouses
        })
      }).catch(err => console.log(err, "ERROR ON FETCH"))

    axios.get(process.env.REACT_APP_BACKEND_SERVER + '/pages')
      .then(res => {
        dispatch({
          type: FETCH_PAGES,
          pages: res.data.pages
        })
      }).catch(err => console.log(err, "ERROR ON FETCH"))
  }

  useEffect(() => {
    fetchPagesAndHouses();
  }, [])

  return (
    <div className="app">
      <CustomImageViewer />
      <Drawer />
      <Layout>
        <ScrollToTop>
          <Switch>
            <Route path="/o-projektu" exact component={Scene.AboutProject} />
            <Route path="/lokalita" exact component={Scene.Locality} />
            <Route path="/nabidka-domu" exact component={Scene.OfferedHouses} />
            <Route path="/aktuality" exact component={Scene.News} />
            <Route path="/kontakt" exact component={Scene.Contact} />
            <Route exact path="/detail-domu/:id([1-9]|1[0-3])" component={Scene.HouseDetail} />
            <Route path="/" exact component={Scene.Home} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
      </Layout>
    </div>
  );
}

export default App;
