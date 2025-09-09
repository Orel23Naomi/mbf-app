import React from 'react';

// Temporary local components for testing
const HomePage = () => <div><h1>MBF Multiservice</h1><p>Benvenuti nel nostro sito!</p></div>;
const AboutPage = () => <div><h1>Chi Siamo</h1><p>Informazioni su MBF Multiservice</p></div>;
const ServicesPage = () => <div><h1>I Nostri Servizi</h1><p>Elenco dei servizi offerti</p></div>;
const ContactPage = () => <div><h1>Contatti</h1><p>Come contattarci</p></div>;

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/contact', element: <ContactPage /> },
];

export default routes;