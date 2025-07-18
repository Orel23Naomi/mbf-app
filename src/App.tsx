import { Helmet } from 'react-helmet';
import './App.css';
import React, { Suspense } from 'react';
import StickyHeader from './shared/StickyHeader';
import './shared/StickyHeader.css';
const AboutUs = React.lazy(() => import('aboutUs/AboutUs'));
const CustomFooter = React.lazy(() => import('aboutUs/CustomFooter'));
const RequestQuoteForm = React.lazy(() => import('profesional/RequestQuoteForm'));
const OurServices = React.lazy(() => import('ourServices/OurServices'));
const MaintenanceSchedule = React.lazy(() => import('maintenanceSchedule/MaintenanceSchedule'));


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>MBF Multiservice - Ristrutturazioni a Alessandria</title>
        <meta name="description" content="Trasforma la tua casa con MBF Multiservice. Professionisti nel settore delle ristrutturazioni a Alessandria e provincia." />
        <meta name="keywords" content="ristrutturazioni, MBF Multiservice, Alessandria, casa, edilizia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mbfmultiservice.it" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MBF Multiservice",
              "url": "https://www.mbfmultiservice.it",
              "logo": "https://mbfmultiservice.it/img/favicon.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+39-375-5981328",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/mbfmultiservice",
                "https://www.instagram.com/mbfmultiservice"
              ]
            }
          `}
        </script>
      </Helmet>
     <StickyHeader/>
     <div className='main-content'>
          <Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
          <RequestQuoteForm />
          <OurServices />
          <MaintenanceSchedule />
          <CustomFooter />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
