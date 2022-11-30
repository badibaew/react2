import React from 'react';


function AboutUs(props) {
    const text = {
        title: "LINA",
        subtitle:"RIKI",
    }

    return (
        <div>
            <h1>
                {
                    text.title
                }
            </h1>
            <h2>
                {
                    text.subtitle
                }
            </h2>

        </div>
    );
}

export default AboutUs;