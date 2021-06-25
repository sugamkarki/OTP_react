import "./App.css";
import { useState, useEffect } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Img from "./Img.svg";
export default function App() {
    // The OTP code entered by the user
    const [userOtpCode, setUserOtpCode] = useState(["", "", "", ""]);
    // The valid otp code
    const [otp, setOtp] = useState("");
    // Checks if the otp matched or not
    const [didOtpMatch, setDidOtpMatch] = useState(false);
    // checks if the user has tried or not
    const [hasUserTried, setHasUserTried] = useState(false);
    // generated new otp
    const generateNewOtp = () =>
        setOtp(String(Math.floor(1000 + Math.random() * 9000)));
    useEffect(() => {
        generateNewOtp();
    }, []);

    const changeHandler = (e) => {
        let newArr = [...userOtpCode];
        newArr[e.currentTarget.name] = e.currentTarget.value[0];
        setUserOtpCode(newArr);
        console.log(userOtpCode);
    };
    const clickHandler = (e) => {
        // checks if the fields are empty
        const isEmpty = userOtpCode.includes("");
        if (isEmpty) {
            alert("enter the fields");
        } else {
            const userOtpCodeStr = userOtpCode.join("");
            // if the otp matches:
            if (userOtpCodeStr === otp) {
                // sets matched to true
                setDidOtpMatch(true);
                // generated new otp
                generateNewOtp();
                // resets the input boxes
                setUserOtpCode(["", "", "", ""]);
            } else {
                setHasUserTried(true);
                setUserOtpCode(["", "", "", ""]);
                generateNewOtp();
            }
        }
    };
    return (
        <div className="app">
            {didOtpMatch ? "OTP MATCHED" : hasUserTried ? "Didn't match" : null}
            <p>Your Otp: {otp}</p>
            <button className="app__backButton"> &#60;== </button>
            <img className="app__image" src={Img} alt="" />
            <div className="app__header">
                <p className="header__h1">OTP Verification</p>
                <p className="header__p">Enter the OTP sent to XXXXXXXXXXXXX</p>
            </div>
            <div className="app__otp">
                {userOtpCode.map((digit, i) => {
                    return (
                        <Input
                            type={"text"}
                            value={digit}
                            changeHandler={changeHandler}
                            name={i}
                            className={"otp__inputBox"}
                            key={i}
                        />
                    );
                })}
            </div>
            <p className="header__p give_padding">Resend OTP?</p>
            <Button
                text={"Verify And Proceed"}
                className={"submit"}
                clickHandler={clickHandler}
            />
        </div>
    );
}
