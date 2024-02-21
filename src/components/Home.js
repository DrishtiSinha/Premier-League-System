import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="title1">UFC Proleague</div>
        <br />
        <br />
        <div className="description">
          Ultimate Football Challengers - Proleague , a Premier League Management Site that keeps a check on the matches
          happening , venues for the match , the player details , team squad
          details and also the on-field workers. It tracks the new
          players,teams,venues etc. added and requires special keys that
          uniquely identifies the person, team, matches etc.
        </div>
      </div>
      <br />
      <br />
        <h3 className="topclub">Top Clubs</h3>
      <div className="topclubs">
        <div className="cardclub">
          <div className="imgbox">
            <div className="imgclub"></div>
          </div>
          <div className="details">
            <h2 className="title">Real Madrid</h2>
            <span className="caption">Madrid</span>
          </div>  
        </div>

        <div className="cardclub">
          <div className="imgbox">
            <div className="imgclubbm"></div>
          </div>
          <div className="details">
            <h2 className="title">Bayern Munich</h2>
            <span className="caption">Germany</span>
          </div>  
        </div>
        
        <div className="cardclub">
          <div className="imgbox">
            <div className="imgclubb"></div>
          </div>
          <div className="details">
            <h2 className="title">Barcelona</h2>
            <span className="caption">Spain</span>
          </div>  
        </div>
        <div className="cardclub">
          <div className="imgbox">
            <div className="imgclubmc"></div>
          </div>
          <div className="details">
            <h2 className="title">Manchester City</h2>
            <span className="caption">England</span>
          </div>  
        </div>
      </div>
      <br/>
      <br/>
      <h3 className="topplayers">Top Players</h3>
      <div className="topplayer">
        <div className="cardplayer">
          <div className="card-border-top"></div>
          <div className="img"></div>

          <span> Cristiano Ronaldo</span>
          <p className="job">Al-Nassr</p>
          <button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
            >
              {" "}
              Know More
            </a>
          </button>
        </div>
        <div className="cardplayer">
          <div className="card-border-top"></div>
          <div className="imgms"></div>

          <span> Lionel Messi</span>
          <p className="job">Paris Saint Germain</p>
          <button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Lionel_Messi"
            >
              {" "}
              Know More
            </a>
          </button>
        </div>

        <div className="cardplayer">
          <div className="card-border-top"></div>
          <div className="imgkb"></div>

          <span>Karim Benzema</span>
          <p className="job">Real Madrid</p>
          <button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Karim_Benzema"
            >
              {" "}
              Know More
            </a>
          </button>
        </div>
      </div>
  
      <hr />

      <h5 className="devtitle">Developers</h5>
      <div className="devs">
        <div className="book">
          <ul>
            <li>PRN-1032211624</li>
            <li>Panel-E</li>
            <li>RollNo.-33</li>
          </ul>
          <div className="cover">
            <p>Anmol Deshratna Saxena</p>
          </div>
        </div>

        <div className="book">
          <ul>
            <li>PRN-1032211517</li>
            <li>Panel-E</li>
            <li>RollNo.-27</li>
          </ul>
          <div className="cover">
            <p>Ayush Thakre</p>
          </div>
        </div>

        <div className="book">
          <ul>
            <li>PRN-1032211208</li>
            <li>Panel-E</li>
            <li>Roll No.-13</li>
          </ul>
          <div className="cover">
            <p>Aerth Saraogi</p>
          </div>
        </div>

        <div className="book">
          <ul>
            <li>PRN-1032210911</li>
            <li>Panel-E</li>
            <li>Roll No.-09</li>
          </ul>
          <div className="cover">
            <p>Drishti Sinha</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
