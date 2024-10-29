import Footcss from "./Footcss.module.css";

const Footer = () => {
  return (
    <>
    <div className={Footcss.full}>
      <div className={Footcss.container}>
        <div className={Footcss.box}>
          <h3>Resources </h3>
          <li>Find a store</li>
          <li>Become a Member</li>
          <li>Send Us Feedback</li>
        </div>
        <div className={Footcss.box}>
          <h3>Terms & Policy</h3>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </div>
        <div className={Footcss.box}>
          <h3>Contact </h3>
          <li>Elavarasan K - elavarasan@student.tce.edu</li>
          <li>Kaviyarasu D - kaviyarasu@student.tce.edu</li>
          <li>Prajith Kannan P S - prajithkannan@student.tce.edu</li>
        </div>
      </div>
        <p>&copy;2024 Myhub,Inc. All rights reserved</p>
        </div>
    </>
  );
};

export default Footer;
