import React from 'react';
import GenericList from './GenericList';

const OurServices: React.FC = () => {
  const services = [
    {
      title: 'Ristrutturazioni Chiavi In Mano di Alloggi',
      description: 'Offriamo soluzioni complete per la ristrutturazione del vostro alloggio, dalla progettazione alla realizzazione finale.',
    },
    {
      title: 'Ristrutturazioni Bagni',
      description: 'Trasformiamo il vostro bagno in uno spazio moderno e funzionale, con materiali di alta qualità e design innovativo.',
    },
    {
      title: 'Manutenzione Impianti Idraulici',
      description: 'Garantiamo il corretto funzionamento dei vostri impianti idraulici con interventi di manutenzione ordinaria e straordinaria.',
    },
    {
      title: 'Manutenzione Impianti Elettrici',
      description: 'Assicuriamo la sicurezza e l\'efficienza dei vostri impianti elettrici con servizi di manutenzione professionale.',
    },
    {
      title: 'Interventi di Manutenzione Ordinaria e Straordinaria',
      description: 'Offriamo servizi di manutenzione per mantenere la vostra proprietà in perfette condizioni, prevenendo problemi futuri.',
    },
  ];

  return (
    <GenericList
      title="I Nostri Servizi"
      description=""
      items={services}
    />
  );
};

export default OurServices;