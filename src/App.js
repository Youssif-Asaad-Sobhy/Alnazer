import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./Components/MovieCard";
import data from "../src/data.json";
import { CardDetails } from "./Components/CardDetails";
import SectionName from "./Components/SectionName";
import SearchBox from "./Components/SearchBox";
import Banars from "./Components/Banars";
import Nav from "./Components/Nav";

function App() {
  const handleClick = (code) => {
    const productCode = encodeURIComponent(
      `I want Product code: ${code.code} With Price: ${code.price} ` //and this is the Photo Link: ${code.imgs[0]}'
    );
    const whatsappNumber = "+201032231491";
    const url = `https://wa.me/${whatsappNumber}?text=${productCode}`;
    window.open(url, "_blank");
  };
  const [curSections, setSections] = useState(
    new Set(data.Sections.map((item) => item.title))
  );
  const sectionCurAmount = new Map([...curSections].map((item) => [item, 0]));
  const [sectionNum, setSectionNum] = useState(
    new Map(
      [...curSections].map((item) => {
        return [item, 4];
      })
    )
  );
  console.log(sectionNum);
  const [details, setDetails] = useState(
    Array.from({ length: data.Main.length }, () => false)
  );
  const handleShowMore = (section) => {
    setSectionNum((prevSectionNum) => {
      const newSectionNum = new Map(prevSectionNum);
      const newMaxAmount = prevSectionNum.get(section) + 25;
      newSectionNum.set(section, Math.min(newMaxAmount, 5000));
      return newSectionNum;
    });
  };
  const [filteredData, setFilteredData] = useState(data.Main);
  const handleSectionSelect = (filteredData) => {
    const newSections = new Set(filteredData.map((item) => item.section));
    setSections(newSections);
    setFilteredData(filteredData);
  };
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const FilteredData = data.Main.filter(
      (item) =>
        item.code.includes(searchTerm) || item.title.includes(searchTerm)
    );
    const newSections = new Set(FilteredData.map((item) => item.section));
    setSections(newSections);
    setFilteredData(FilteredData);
  }, [searchTerm]);
  const handleDetailsClick = (index) => {
    const newDetails = [...details];
    newDetails[index] = !newDetails[index];
    setDetails(newDetails);
  };
  return (
    <div className="App ">
      <Nav />
      <Banars data={data} handleSectionSelect={handleSectionSelect} />
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container con ">
        {[...curSections].map((section) => (
          <>
            <SectionName section={section} />
            {filteredData.map((card, index) => {
              if (
                card.section === section &&
                sectionCurAmount.get(section) < sectionNum.get(section)
              ) {
                sectionCurAmount.set(
                  section,
                  sectionCurAmount.get(section) + 1
                );
                return (
                  <div key={index} class="m-2">
                    <MovieCard card={card} />
                    <CardDetails
                      index={index}
                      details={details[index]}
                      card={card}
                      handleClick={handleClick}
                      handleDetailsClick={handleDetailsClick}
                    />
                  </div>
                );
              }
              return <></>;
            })}
            <button
              onClick={() => handleShowMore(section)}
              className="btn"
              style={{ backgroundColor: "#44f2a7" }}
            >
              تسوق المزيد{" "}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
