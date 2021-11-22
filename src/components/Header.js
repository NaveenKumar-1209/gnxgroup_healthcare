import React from "react";
import styles from "./Header.module.css";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.firstLayer}>
          <div className={styles.logo}>
            <img
              src="https://maxhealthcare.in/specialities/liver/img/logo.png"
              alt="logo"
            />
          </div>
          <div className={styles.getCallBtn}>
            <a>
              <Button>GET A CALL BACK</Button>
            </a>
          </div>
        </div>
        <div className={styles.secondLayer}>
          <div className={styles.imgUmbrella}>
            <img
              src="https://maxhealthcare.in/specialities/liver/img/slider-a_1-desk.jpg?ver=1.4"
              alt="Man with Umbrell"
            />
          </div>
          <div className={styles.secondLyrTxt}>
            <div>
              <h3>Max Centre for Liver Transplant & Biliary Sciences</h3>
              <p>
                Max Centre for Liver Transplant and Biliary Science is one of
                the busiest and a very popular destination for liver
                transplantation in India.
              </p>
              <ul>
                <li>
                  <b>120+</b>specilist team members
                </li>
                <li>
                  <b>20+</b>year of experience
                </li>
                <li>
                  <b>6400</b>successful liver transplants performed
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.submissionForm}>
            <div>
              <h3>ENQUIRE NOW</h3>
            </div>
            <form className={styles.formWidthSet}>
              <div className={styles.user_field}>
                <div className={styles.input_field}>
                  <input
                    className={styles.ig_input}
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className={styles.input_field}>
                  <input
                    className={styles.ig_input}
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className={styles.input_field}>
                  <input
                    className={styles.ig_input}
                    placeholder="Phone"
                    type="text"
                  />
                </div>
                <div className={styles.input_field}>
                  <input
                    className={styles.ig_input}
                    placeholder="Select Hospital"
                    type="text"
                  />
                </div>
                <div className={styles.input_field}>
                  <textarea
                    className={styles.ig_txtArea}
                    placeholder="Write your query here"
                  ></textarea>
                </div>
                <div className={styles.submit_btn}>
                  <button className={styles.btn}>SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
