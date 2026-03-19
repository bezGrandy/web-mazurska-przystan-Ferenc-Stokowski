import React, {useState} from "react";
import "./ReservationCalculator.css";
import { calculatePrice } from "../Logic/CalculatorLogic";
import type {EquipmentType} from "../Logic/CalculatorLogic";

const ReservationCalculator: React.FC = () => {

    const [hours, setHours] = useState<number>(1);
    const [name, setName] = useState("");
    const [equipment, setEquipment] = useState<EquipmentType>("kayak");
    const [childVest, setChildVest] = useState(false);
    const [instructor, setInstructor] = useState(false);
    const [payment, setPayment] = useState("");
    const [acceptedRules, setAcceptedRules] = useState(false);

    const totalPrice = calculatePrice({
        equipment,
        hours,
        childVest,
        instructor
    });


    return (
        <div className="app-container">
            <h1>Kalkulator wynajmu</h1>

        <form className="reservation-form">

            {/* Imie */}

            <div className="form-element">
                <label htmlFor="name">Imię</label>
                <input id="name" type="text" placeholder="Twoje imię"
                       value={name}
                       onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Sprzet */}

            <div className="form-element">
                <label htmlFor="equipment">Wybierz sprzęt</label>
                <select id="equipment"
                        value={equipment}
                        onChange={(e) => setEquipment(e.target.value as EquipmentType)}>
                    <option value="kayak">Kajak (20zł/h)</option>
                    <option value="water-bike">Rower wodny (35zł/h)</option>
                    <option value="omega">Omega (150zł/h)</option>
                </select>
            </div>

            {/* Ostrzezenie o zaglowce */}


            {equipment === "omega" && (
                <div className="warning">
                    Przy żaglówce wymagany jest patent żeglarski!
                </div>
            )}


            {/* Godziny */}

            <div className="form-element">
                <label htmlFor="hours">
                    Liczba godzin: {hours}
                </label>

                <input
                    type="range" min="1" max="8" step={1} id="hours" value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                />
            </div>

            {/* dodatkowe */}
            <div className="form-element">
                <label>
                    <input type="checkbox"
                           checked={childVest}
                           onChange={(e) => setChildVest(e.target.checked)}/>
                    Kapok dla dziecka (+5zł)
                </label>
            </div>

            <div className="form-element">
                <label>
                    <input type="checkbox"
                           checked={instructor}
                           onChange={(e) => setInstructor(e.target.checked)} />
                    Instruktor (+50zł/h)
                </label>
            </div>

            {/* Platnosc */}

            <div className="form-element">
                <label>Metoda płatności</label>

                <label>
                    <input type="radio" name="payment"
                           value="card"
                           onChange={(e) => setPayment(e.target.value)} />
                    Karta
                </label>

                <label>
                    <input type="radio" name="payment"
                           value="blik"
                           onChange={(e) => setPayment(e.target.value)} />
                    BLIK
                </label>
            </div>

            {/* Regulamin */}
            <div className="form-element">
                <label>
                    <input type="checkbox"
                           checked={acceptedRules}
                           onChange={(e) => setAcceptedRules(e.target.checked)} />
                    Akceptuję regulamin
                </label>
            </div>

            {/* Cena */}

            <div className="price-box">
                Cena: <strong>{totalPrice} zł</strong>
            </div>

            <button className="submit-button"
                    disabled={!name || !payment || !acceptedRules}
            >
                Rezerwuj
            </button>

        </form>
    </div>
    );
};

export default ReservationCalculator;
