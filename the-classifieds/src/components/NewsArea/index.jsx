import Footer from '@common/Footers/Footer';
import Header from '@common/Header';
import PortfolioFive from '@common/Portfolio/PortfolioFive';
import NewsHero from './NewsHeader';

const index = () => {
  return (
    <>
      <Header/>
      <NewsHero/>
      <PortfolioFive/>
      <Footer/>
    </>
  );
};

export default index;