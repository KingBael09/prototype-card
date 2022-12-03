import "./App.css";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [featSet, setfeatSet] = useState();
  const [othSet, setothSet] = useState();

  const fetchData = async () => {
    const getData = await fetch(
      "https://my-json-server.typicode.com/KingBael09/JSON_Server/data"
    );
    const res = await getData.json();
    applyFilter(res);
  };

  const applyFilter = (elm) => {
    const list1 = elm.filter((e) => {
      return e.isFeatured === true;
    });
    const list2 = elm.filter((e) => {
      return e.isFeatured !== true;
    });

    setfeatSet(list1);
    setothSet(list2);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (featSet !== undefined && othSet !== undefined) {
    return (
      <div className="home">
        @Responsive CSS
        <h1 className="Header">Horizontal</h1>
        <div className="App horizontal">
          <div className="Card cScroll">
            {featSet.map((e) => {
              return (
                <div key={e.id} className="Featured restro scroll">
                  <div className="data intscroll">
                    <div className="name">{e.name}</div>
                    <div className="food">({e.cuisine})</div>
                    <div className="tags"></div>
                  </div>
                  <div className="star scStar">
                    <AiOutlineStar />
                  </div>
                </div>
              );
            })}
            {othSet.map((e) => {
              return (
                <div key={e.id} className="notFeatured restro scroll">
                  <div className="data intscroll">
                    <div className="name">{e.name}</div>
                    <div className="food">({e.cuisine})</div>
                    <div className="tags"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="Header">Vertical</h1>
        <div className="App">
          <div className="Card">
            {featSet.map((e) => {
              return (
                <div key={e.id} className="Featured restro ">
                  <div className="data">
                    <div className="name">{e.name}</div>
                    <div className="food">({e.cuisine})</div>
                    <div className="tags"></div>
                  </div>
                  <div className="star ">
                    <AiOutlineStar />
                  </div>
                </div>
              );
            })}
            {othSet.map((e) => {
              return (
                <div key={e.id} className="notFeatured restro">
                  <div className="data">
                    <div className="name">{e.name}</div>
                    <div className="food">({e.cuisine})</div>
                    <div className="tags"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
