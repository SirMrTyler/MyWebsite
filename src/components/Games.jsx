import GamesCard from "./GamesCard";

function Games() {
    return (
        <>
            <section id="games" className="games">
                <div className="container">
                    <div className="games-content">
                        <p>games</p>
                        <h3>I'm not just a web developer! </h3>
                        <strong>Here are some of the games I've made!</strong>
                        <div className="games-grid">
                            <GamesCard
                            
                            />

                        </div>
                    </div>
                </div>       
            </section>
        </>
    );
}

export default Games;