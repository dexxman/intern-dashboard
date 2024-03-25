import React, { useState } from 'react';
import internsData from './internsData';

function Interns() {
  const [interns, setInterns] = useState(internsData);
  
  // Function to sort interns alphabetically by name
  const sortByName = () => {
    const sortedInterns = [...interns].sort((a, b) => a.name.localeCompare(b.name));
    setInterns(sortedInterns);
  };

  // Function to sort interns by their overall grade
  const sortByGrade = () => {
    const sortedInterns = [...interns].sort((a, b) => b.grade - a.grade);
    setInterns(sortedInterns);
  };

  // Search function 
  const searchByName = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredInterns = internsData.filter(intern => 
      intern.name.toLowerCase().includes(searchQuery)
    );
    setInterns(filteredInterns);
  };

  return (
    <div>
        
      <button className='sort-btn' onClick={sortByName}>Sort by Name</button>
      <button className='grade-btn' onClick={sortByGrade}>Sort by Grade</button>
      <input className='search-btn' type="text" placeholder="Search by Name" onChange={searchByName} />
      
      {interns.map((intern) => (
        <div className='internInfo-section' key={intern.id}>
          <h2>{intern.name}</h2>
          <img src={intern.picture}  />
          <p>{intern.info}</p>
          <p>Overall Grade: {intern.grade}%</p>
          <p>Learning Path: {intern.learningPath}</p>
          <p>Attendance: {intern.attendance}%</p>
        </div>
      ))}
    </div>
  );
}

export default Interns;