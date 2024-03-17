import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBars, faXmark, faGear, faCoins, faEyeSlash, faCopy } from '@fortawesome/free-solid-svg-icons';

const WaitRoom = () => {
    return (
        <div class='container'>

            <div class="top-part">
                <div class="score-and-money">
                    <p class="top-name-user">Thuỳ win</p>
                    <div class="img-frame">
                    </div>
                    <p class="coins">
                        <span>999900</span>
                        <FontAwesomeIcon icon={faCoins} className="money-icon" />
                    </p>
                    <p class="coins">
                        <span>9999</span>
                        <FontAwesomeIcon icon={faCoins} className="money-icon" />
                    </p>

                </div>
                <div class="lable-room">
                    <p>private table</p>
                </div>
                <div class="web-options">
                    <div class="icon-container">
                        <FontAwesomeIcon icon={faCartPlus} className="setting-icon" />
                    </div>
                    <div class="icon-container">
                        <FontAwesomeIcon icon={faBars} className="setting-icon" />
                    </div>
                    <div class="icon-container">
                        <FontAwesomeIcon icon={faGear} className="setting-icon" />
                    </div>
                    <div class="icon-container icon-container-exit">
                        <FontAwesomeIcon icon={faXmark} className="setting-icon" />
                    </div>
                </div>
            </div>
            <div className='top-part-two'>
                <div className='password-div'>
                    <FontAwesomeIcon icon={faEyeSlash} className="setting-icon" />
                    <input
                        type="password"
                        id="password"
                        disabled
                        placeholder='********'
                    />
                    <FontAwesomeIcon icon={faCopy} className="setting-icon" />
                </div>
                <div className='options-div'>
                    <button class="options-btn">2x2</button>
                    <button class="options-btn">quick game</button>
                    <button class="options-btn">no sussgest</button>
                </div>
            </div>

        </div>
    );
}
export default WaitRoom;