import React, { useState } from 'react';
import { MainWrapper, Button } from './Main.style';

function Main () {
    const [toggle,setToggle] = useState(false);

    render() {
        return (
            <MainWrapper>
                <h2>EX1_useState_basic</h2>
                <p>{`the light is ${toggle ? 'ON' : 'OFF'}`}</p>
                <Button onClick={() => setToggle (!toggle)}>TOGGLE</Button>
            </MainWrapper>
        );
    }
}

export default Main;
