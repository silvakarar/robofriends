import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-lightest-blue navy dib pa3 ma3 grow bw2 shadow-2">
      <img src={`https://robohash.org/${id}?200/200`} alt="contacts" />
      <div>
        <h3>{name} </h3>
        <p> {email}</p>
      </div>
    </div>
  );
};
export default Card;
