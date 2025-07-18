import React, { Suspense } from 'react';
const GenericList = React.lazy(() => import('genericList/GenericList'));

const MaintenanceSchedule: React.FC = () => {
  const maintenanceItems = [
    {
      title: 'Impianti Idraulici',
      description: 'Controlli annuali per prevenire perdite e garantire il corretto funzionamento.',
    },
    {
      title: 'Impianti Elettrici',
      description: 'Verifiche periodiche per assicurare la sicurezza e prevenire guasti.',
    },
    {
      title: 'Ristrutturazioni Bagni',
      description: 'Interventi di aggiornamento ogni 10-15 anni per mantenere il bagno moderno e funzionale.',
    },
    {
      title: 'Manutenzione Ordinaria',
      description: 'Controlli stagionali per mantenere la vostra proprietà in ottime condizioni.',
    },
  ];

  return (
     <Suspense fallback={<div>Caricamento lista...</div>}>
      <GenericList
        title="Quando Fare la Manutenzione"
        description="La manutenzione regolare è essenziale per garantire la sicurezza e l'efficienza degli impianti della vostra casa. Ecco alcuni consigli su quando effettuare la manutenzione:"
        items={maintenanceItems}
      />
  </Suspense>
  );
};

export default MaintenanceSchedule;