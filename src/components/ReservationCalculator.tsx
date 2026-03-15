import React from "react";

const ReservationCalculator: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Kalkulator wynajmu</h1>

    <form className="reservation-form">

        {/* Imie */}

        <div className="form-element">
            <label htmlFor="name">Imię</label>
            <input id="name" type="text" placeholder="Twoje imię" />
        </div>

    {/* Sprzet */}

    <div className="form-element">
        <label htmlFor="equipment">Wybierz sprzęt</label>
        <select id="equipment">
            <option value="kayak">Kajak (20zł/h)</option>
            <option value="water-bike">Rower wodny (35zł/h)</option>
            <option value="omega">Omega (150zł/h)</option>
        </select>
    </div>

    {/* Ostrzezenie o zaglowce */}

    <div className="warning">
          Przy żaglówce wymagany jest paten żeglarski!
    </div>

    {/* Godziny */}

    <div className="form-element">
    <label htmlFor="hours">Liczba godzin</label>
    <input type="range" min="1" max="8" id="hours" step={1} />
        </div>

    </form>
    </div>
    );
};

export default ReservationCalculator;