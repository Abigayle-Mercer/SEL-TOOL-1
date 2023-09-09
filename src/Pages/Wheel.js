import React from "react";
import { useState } from "react";
import "./Wheel.css";
import "react-quill/dist/quill.snow.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReflectionTextBox from "../Components/ReflectionTextBox/ReflectionTextBox.js";
import EmailForm from "../Components/EmailForm/EmailForm.js";
import Chart from "../Components/Chart/Chart.js";
import Banner from "../Components/Banner/Banner";


function Wheel(props) {
  async function savePDF(e) {
    e.preventDefault();
    setModal(false);

    // let name = document.getElementById("name").value;
    // let user_email = document.getElementById("user_email").value;
    // let Q1 = document.getElementById("Q1").value;
    // let Q2 = document.getElementById("Q2").value;
    // let Q3 = document.getElementById("Q3").value;
    // let Q4 = document.getElementById("Q4").value;
    // let Q5 = document.getElementById("Q5").value;
    // let Q6 = document.getElementById("Q6").value;

    const docName = document.getElementById("name").value;

    // Create a canvas to capture the content
    const canvas = await html2canvas(document.getElementById("WholePage"), {
      scrollY: -window.scrollY,
    });

    const canvas2 = await html2canvas(document.getElementById("reflections"), {
      scrollY: -window.scrollY,
    });

    // Convert canvas to an image (DataURL)
    const imgData = canvas.toDataURL("image/png");
    const imgData2 = canvas2.toDataURL("image/png");

    // Create a PDF document
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Add user info and image to the PDF
    pdf.text(`Document Name: ${docName}`, 10, 10);
    pdf.addImage(imgData, "PNG", 10, 20, 190, 0);
    pdf.addPage();
    pdf.addImage(imgData2, "PNG", 0, 0, 180, 0);

    // Save the PDF
    pdf.save(`${docName}.pdf`);
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      
      <div id="WholePage">
        <div id="outermost">
          <div className="wrap">
            <Chart
              slices={props.slices}
              title={"SEL Competencies Reflection"}
            ></Chart>
          </div>
        </div>
      </div>
      <div id="reflections" className="reflections">
        <ReflectionTextBox className="reflections"></ReflectionTextBox>
      </div>

      <button className="btn-modal" onClick={toggleModal}>
        Want a PDF of your responses?
      </button>
      {/* <button classname="btn-modal" onClick={sendEmail}>
        Want a PDF of your responses?
      </button> */}

      {modal && <EmailForm toggleModal={toggleModal} sendEmail={savePDF} />}
    </div>
  );
}

export default Wheel;
