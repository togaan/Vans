import React from "react";
import income from "../../images/income.jpg"

const HostIncome = () => {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]

    return (
        <div className="host">
            <div className="container">
                <section className="host-income pt-5">
                    <h1>Income</h1>
                    <p>
                        Last <span>30 days</span>
                    </p>
                    <h2>$2,260</h2>
                    <img
                        className="img-fluid"
                        src={income}
                        alt="Income graph"
                    />
                    <div className="info-header">
                        <h3>Your transactions (3)</h3>
                        <p>
                            Last <span>30 days</span>
                        </p>
                    </div>
                    <div className="transactions">
                        {transactionsData.map((item) => (
                            <div key={item.id} className="transaction">
                                <h3>${item.amount}</h3>
                                <p>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HostIncome