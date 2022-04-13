import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Noida");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c80d27519e0c52e64584a2ba1dfd15f7&units=metric`
            const response = await fetch(url);
            const resJson = await response.json()
            // console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <h2 className="heading">WEATHER APP</h2>
                <div className="inputData">
                    <input type="search" value={search} className="inputField"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                </div>
                {!city ? (<p className="error">No Data Found  </p>)
                    :
                    (

                        <div>
                            <div className="info">
                                <h1 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h1>
                                <h2 className="temp">Temp: {city.temp} °Cel</h2>
                                <h3 >
                                    Min: {city.temp_min} °Cel | Max: {city.temp_max} °Cel
                                </h3>
                            </div>
                            <div className="wave1"></div>
                            <div className="wave2"></div>
                            <div className="wave3"></div>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Tapp;