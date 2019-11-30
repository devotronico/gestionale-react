import React from 'react';
import '../../style/clienti/faker.css';
import faker from 'faker';

const ClienteFaker = () => {
  faker.locale = 'it';
  return (
    <div className="faker">
      {/* <p>{faker.fake('{{name.lastName}}, {{name.firstName}} ')}</p> */}
      <h4>Cliente</h4>
      <p>
        <span>Colore:</span> {faker.commerce.color()}
      </p>
      <p>
        <span>Uuid:</span> {faker.random.uuid()}
      </p>
      <p>
        <span>Nome:</span> {faker.name.firstName()}
      </p>
      <p>
        <span>Cognome:</span> {faker.name.lastName()}
      </p>
      <p>
        <span>Telefono:</span> {faker.phone.phoneNumber()}
      </p>
      <p>
        <span>Email:</span> {faker.internet.email()}
      </p>
      <p>
        <span>Password:</span> {faker.internet.password()}
      </p>
      <p>
        <span>Codice 1:</span> {faker.helpers.randomize()}
      </p>
      <p>
        <span>Codice 2:</span> {faker.random.alphaNumeric()}
      </p>

      <h4>Indirizzi</h4>
      <p>
        <span>Via:</span> {faker.address.streetName()}
      </p>
      <p>
        <span>Via:</span> {faker.address.streetAddress()}
      </p>
      <p>
        <span>Città:</span> {faker.address.city()}
      </p>
      <p>
        <span>Città Prefisso:</span> {faker.address.cityPrefix()}
      </p>
      <p>
        <span>Città Suffisso:</span> {faker.address.citySuffix()}
      </p>
      <p>
        <span>Nazione Suffisso:</span> {faker.address.country()}
      </p>
      <p>
        <span>Nazione Code:</span> {faker.address.countryCode()}
      </p>
      <p>
        <span>Stato:</span> {faker.address.state()}
      </p>
      <p>
        <span>Stato Abbr.:</span> {faker.address.stateAbbr()}
      </p>
    </div>
  );
};

export default ClienteFaker;
