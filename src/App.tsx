import { Helmet } from 'react-helmet';
import './App.css';
import StickyHeader from './components/StickyHeader';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import MaintenanceSchedule from './components/MaintenanceSchedule';
import RequestQuoteForm from './components/RequestQuoteForm';
import CustomFooter from './components/CustomFooter';

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
      <AboutUs></AboutUs>
      <RequestQuoteForm></RequestQuoteForm>
      <OurServices></OurServices>
      <MaintenanceSchedule></MaintenanceSchedule>
      <CustomFooter></CustomFooter>
     </div>
    </div>
  );
}

export default App;
