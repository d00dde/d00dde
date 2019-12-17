import {withMainLayuout} from '../hoc/index';

import HomePage_S from './home-page';
import SummaryPage_S from './summary-page';
import PortfolioPage_S from './portfolio-page';
import ArticlesPage_S from './articles-page';
import Summary from '../modules/summary';

const HomePage = withMainLayuout(HomePage_S),
SummaryPage = withMainLayuout(SummaryPage_S),
PortfolioPage = withMainLayuout(PortfolioPage_S),
ArticlesPage = withMainLayuout(ArticlesPage_S);

export {
	HomePage, 
	SummaryPage, 
	PortfolioPage,
	ArticlesPage,
	Summary
}