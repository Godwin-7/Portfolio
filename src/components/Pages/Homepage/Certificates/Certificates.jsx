import React from 'react';
import './Certificates.css';

const Certificates = () => {
  // Sample data structure for certificates - you can easily add more here
  const certificatesData = {
    certifications: [
      {
        id: 1,
        title: "Machine Learning (Topper)",
        organization: "NPTEL",
        year: "2024"
      },
      {
        id: 2,
        title: "Cloud Computing, Cybersecurity",
        organization: "NPTEL",
        year: "2023 - 2024"
      },
      {
        id: 3,
        title: "Python, Softskills",
        organization: "NPTEL",
        year: "2023"
      },
      {
        id: 4, // New ID
        title: "Human Resources Management, Entrepreneurship",
        organization: "NPTEL",
        year: "2024"
      }
  // Add more certificates here
    ],
    courses: [
      {
        id: 1,
        title: "Complete Python Bootcamp",
        organization: "Udemy",
        year: "2023"
      },
      {
        id: 2,
        title: "React - The Complete Guide",
        organization: "Udemy",
        year: "2024"
      },
      {
        id: 3,
        title: "Data Structures and Algorithms",
        organization: "GeeksforGeeks",
        year: "2023"
      },
      {
        id: 4, // New ID
        title: "New Certificate Title",
        organization: "Organization Name",
        year: "2024"
      }
  // Add more certificates here
    ]
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <h2 className="heading">My <span>Certificates</span></h2>
        <main className="row">
          
          <section className="col" id="colone">
            <header className="title">
              <h2 id="edu">Certifications</h2>
            </header>
            <div className="contents">
              {certificatesData.certifications.map((cert) => (
                <div key={cert.id} className="box">
                  <h1 id="one">{cert.title}</h1>
                  <h2 id="clg">{cert.organization}</h2>
                  <h3 id="yr">{cert.year}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="col" id="coltwo">
            <header className="title">
              <h2 id="edu">Courses</h2>
            </header>
            <div className="contents">
              {certificatesData.courses.map((course) => (
                <div key={course.id} className="box">
                  <h2 id="one">{course.title}</h2>
                  <h3 id="clg">{course.organization}</h3>
                  <h4 id="yr">{course.year}</h4>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </section>
  );
};

export default Certificates;