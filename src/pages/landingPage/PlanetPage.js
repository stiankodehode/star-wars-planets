const PlanetPage = (props) => {
    const planet = props.data;

    return (
        <>
            <img
                src={
                    planet.name === "Yavin IV"
                        ? require("../../img/yavin-iv.png")
                        : require(`../../img/${planet.name.toLowerCase()}.png`)
                }
            />
        </>
    );
};

export default PlanetPage;
