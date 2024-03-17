import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import pfp from './pfp.jpg';
import img1 from './01.jpg';
import img4 from './04.jpg';
import img5 from './05.jpg';
import img6 from './06.jpg';
import img2 from './02.jpg';
import img3 from './03.jpg';
import BootstrapCarousel from './BootstrapCarousel';
import MovieCard from './MovieCard';
import data from '../src/data.json';
import { Card } from 'react-bootstrap';

// 4038db44

function App() {
    // const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    // const searchMovies = async (title) => {
    //     const response = await fetch(`${apiLInk}&s=${title}`);
    //     const data = await response.json();
    //     setMovies(data.Search);
    // };
    // useEffect(() => {
    //     searchMovies(data);
    // }, []);

    // function handleKeyPress(event) {}

    // let output = searchTerm.replace(/\s+/g, '');
    const [json, setJson] = useState([]);

    useEffect(() => {
        // Set the data from the imported JSON file
        setJson(data);
        // console.log(data.map())
    }, []);
    const handleClick = (code) => {
        // Accept code as parameter
        const productCode = encodeURIComponent(`Product code: ${code}`);
        const whatsappNumber = '+201559624428';
        const url = `https://wa.me/${whatsappNumber}?text=${productCode}`;

        window.open(url, '_blank');
    };

    // const [jsonData, setJsonData] = useState(null);
    // useEffect(() => {
    //     fetch(data)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setJsonData(data);
    //         })
    //         .catch((error) =>
    //             console.error('Error fetching JSON data:', error)
    //         );
    // }, []);

    // // if (!jsonData) {
    // //     return <div>Loading...</div>;
    // // }
    // console.log(data);
    // console.log(jsonData);
    const [filteredData, setFilteredData] = useState(data.Main);
    const handleSectionSelect = (filteredData) => {
        setFilteredData(filteredData);
    };

    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const FilteredData = data.Main.filter((item) => item.code.includes(searchTerm) || item.title.includes(searchTerm));
        setFilteredData(FilteredData);
    }, [searchTerm]);
    return (
        <div className="App">
            <nav className="navbar navbaar sticky-top">
                <div className="container-fluid ms-3">
                    <a className="navbar-brand" href="#">
                        <div className="logo">
                            Alnazer <span className={'shaker'}>.</span>
                        </div>
                    </a>
                    <div className={'joe  pe-3'}>
                        <a
                            href={
                                'https://www.facebook.com/profile.php?id=61556301853383'
                            }
                            className={'text-decoration-none'}
                            target={'about-blank'}
                        >
                            {/*<span className={'me-2 text-black-50'}>Developed With &#128153; By</span>*/}
                            <img className={'pfp rounded'} src={pfp} alt="" />
                            <span className={'ms-3 text-black-50    '}>
                                Alnazer FB Page
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            <div className={'container'}>
                <BootstrapCarousel
                    data={data}
                    sections={data.Sections}
                    onSelectSection={handleSectionSelect}
                />
            </div>
            <div className={'container mt-5 me-5'}>
                <div className="search-container mt-3">
                    <input
                        placeholder={'Search...'}
                        className={'search'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        defaultValue={''}
                    />
                </div>
            </div>
            <div className="container-fluid con">
                {filteredData.map((card, index) => (
                    <div key={index}>
                        <MovieCard
                            card={card}
                            handleClick={() => handleClick(card.code)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
