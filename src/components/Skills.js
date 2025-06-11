import React, { useEffect, useState } from 'react';

function Skills() {
  const [data, setData] = useState([]);

  // Fetch skills from API when the component mounts
  useEffect(() => {
    fetch('https://studentproject-7o5i.onrender.com/api/getall') // Replace with your real API
      .then((res) => res.json())
      .then((result) => {
        setData(result.data); // Assuming the API returns an array of skills
      })
      .catch((err) => {
        console.error('Failed to fetch skills:', err);
      });
  }, []);

  return (
    <section id='skills' className='skillsSection'>
      <div>
        <h2>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {data.map((skill, index) => (
            <div
              key={index}
              style={{
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '200px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <h1>{skill.name}</h1>
              <h4>{skill.studentId}</h4>
              <p>{skill.rollno}</p>
              <p>{skill.year}</p>
              <p>{skill.department}</p>
              <p>{skill.gender}</p>
              {/* Add more fields if available */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

