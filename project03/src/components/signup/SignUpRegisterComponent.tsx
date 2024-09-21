import React, { useState } from "react";
import googleIcon from "../../../public/images/googleIcon.png";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import OrangeBtn from "../reusable/OrangeBtn";

const SignUpRegisterComponent: React.FC = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [isSignedUp, setIsSignedUp] = useState(false); 

  const handleGoogleLogin = () => {
    login();
    // router.push("/userDashboard");
    setIsSignedUp(true); 
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(); 
    // router.push("/userDashboard");
    setIsSignedUp(true);
  };

  return (
    <section className="signupRegisterContainer">
      <div className="heading">
        <h2>
          <strong>Најави се</strong> <span>или</span> <strong>Регистрирај се</strong>
        </h2>
      </div>

      <div className="googleLogin" onClick={handleGoogleLogin}>
        <Image src={googleIcon} alt="google icon" width={40} height={40}></Image>
        <p><strong>Продолжи со Google</strong></p>
      </div>

      <div className="orContainer">
        <div className="line"></div>
        <p>Или</p>
        <div className="line"></div>
      </div>

      <form onSubmit={handleEmailLogin}>
        <div className="emailLogin">
          <label htmlFor="email">е-маил</label>
          <input type="email" name="email" placeholder="mhra@primer.com" required />
        </div>

        <div className="signupButton">
          <button type="submit">Продолжи со овој email</button>
        </div>
      </form>

      <div className="acceptTermsAndConditions">
        <p>Со кликнување на &quot;Продолѓи со Google/Email&quot;, се согласувате со нашите <span>Услови на користење</span> и <span>Политика за приватност</span></p>
        <label>
          <input type="checkbox" id="checkbox1" name="checkbox1" />
          Сакам да станам член на МАЧР
        </label>
        <label>
          <input type="checkbox" id="checkbox1" name="checkbox1" />
          Сакам редовно на добивам информации на е-маил
        </label>
      </div>

      {isSignedUp && (
        <div className="popup">
          <div className="popup-content">
            <p>Успешно се најавивте</p>
           
            <OrangeBtn href="/userDashboard" text=" Оди до Dashboard"/>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUpRegisterComponent;
