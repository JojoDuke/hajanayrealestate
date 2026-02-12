import React from 'react';
import Table from './Table/Table';
import visualMap from '../../assets/hajany_mapa_interaktivni.jpg'
import { useWindowSize } from '../../Utils/useWindowSize';

const MobileHouseChoice = ({ houses }) => {

    const windowSize = useWindowSize();

    const columns = React.useMemo(
        () => [
            {
                Header: 'Název domu',
                accessor: 'name',
            },
            {
                Header: 'Dostupnost',
                accessor: 'available',
            },
            {
                Header: 'Dispozice',
                accessor: 'disposition',
            },
            {
                Header: 'Rozloha domu',
                accessor: 'floor_area',
            },
            {
                Header: 'Rozloha pozemku',
                accessor: 'lot_area',
            },
            {
                Header: 'Cena',
                accessor: 'price',
            }
        ],
        []
    )

    // MOCK DATA - Only used as fallback if API data is not available
    const mockData = [
        { id: 1, name: "A1", available: true, disposition: "5+kk", floor_area: "200 m²", lot_area: "503 m²", price: "20 000 000 Kč" },
        { id: 2, name: "A2", available: true, disposition: "5+kk", floor_area: "200 m²", lot_area: "521 m²", price: "20 000 000 Kč" },
        { id: 3, name: "A3", available: true, disposition: "5+kk", floor_area: "200 m²", lot_area: "524 m²", price: "20 000 000 Kč" },
        { id: 4, name: "A4", available: true, disposition: "5+kk", floor_area: "200 m²", lot_area: "465 m²", price: "20 000 000 Kč" },
        { id: 5, name: "A5", available: true, disposition: "5+kk", floor_area: "200 m²", lot_area: "474 m²", price: "20 000 000 Kč" },
    ];

    // Use API data if available, otherwise fall back to mockData
    let data = houses && houses.length > 0 ? houses : mockData;

    // Filter to only show houses A1-A5
    data = data.filter(house => ['A1', 'A2', 'A3', 'A4', 'A5'].includes(house.name));

    // Format the availability text for display
    data = data.map((house) => {
        let newHouse = { ...house };
        newHouse.available = house.available ? "K dispozici" : "Prodáno";
        return newHouse;
    });

    return (
        <>
            {windowSize.width <= 769 &&
                <img src={visualMap} alt="vizualizace všech domů" width="100%" loading="lazy" />
            }
            {data.length > 0 &&
                <div>
                    <Table columns={columns} data={data} />
                </div>}
        </>
    );
}

export default MobileHouseChoice;