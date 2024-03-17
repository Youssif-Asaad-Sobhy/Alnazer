import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class BootstrapCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
        };
    }

    filterData = (section) => {
        const filteredData = this.props.data.Main.filter((item) => item.section === section);
        this.props.onSelectSection(filteredData);
    };
    render() {
        

        return (
            <div>
                <div className="container-fluid mt-5">
                    <div className="row title" style={{ marginBottom: '20px' }}>
                        <div className="col-sm-12 btn btn-warning">
                            Sections That We Have &#128153;
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Carousel>
                        {this.props.sections.map((item) => (
                            <Carousel.Item onClick={() => this.filterData(item.title)}>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <Carousel.Caption>
                                    <h3>{item.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                        {/* <Carousel.Item onClick={() => this.filterData('Box')}>
                            <img
                                className="d-block w-100 img-fluid"
                                src={'https://i.ibb.co/BZZncGD/FB-IMG-1708888511880.jpg'}
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>Boxes</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.filterData('Ramadan')}>
                            <img
                                className="d-block w-100 img-fluid"
                                src={'https://i.ibb.co/0FKVNvB/FB-IMG-1708888642120.jpg'}
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>Ramadan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item onClick={() => this.filterData('HandMade')}>
                            <img
                                className="d-block w-100 img-fluid"
                                src={'https://i.ibb.co/bJBsBnK/FB-IMG-1708888848237.jpg'}
                                alt=""
                            />
                            <Carousel.Caption>
                                <h3>HandMade</h3>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default BootstrapCarousel;
