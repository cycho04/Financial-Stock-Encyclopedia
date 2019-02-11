import IEX from '../apis/IEX';
import unsplash from '../apis/unsplash';

export const fetchCompanyInfo = (data) => async dispatch => {
    const companyInfo = await IEX.get(`/stock/${data}/company`);
    dispatch({
        type: 'COMPANY_INFO',
        payload: companyInfo.data
    })
};

export const fetchFinancialInfo = (data) => async dispatch => {
    const financialInfo = await IEX.get(`/stock/${data}/financials`);
    dispatch({
        type: 'FINANCIAL_INFO',
        payload: financialInfo.data
    })
};

export const fetchQuoteInfo = (data) => async dispatch => {
    const quoteInfo = await IEX.get(`/stock/${data}/quote`, {
        params: {
            displayPercent: true
        }
    });
    dispatch({
        type: 'QUOTE_INFO',
        payload: quoteInfo.data
    })
};

export const fetchNews = (data) => async dispatch => {
    const newsInfo = await IEX.get(`/stock/${data}/news`);
    dispatch({ 
        type: 'NEWS_INFO', 
        payload: newsInfo.data
    })
}

export const fetchImages = (num) => async dispatch => {
    const images = await unsplash.get('/photos/random', {
        params: {
            query: 'workspace',
            count: num
        }
    })
    dispatch({
        type: 'IMAGES',
        payload: images
    })
};

export const fetchSymbols = () => async dispatch => {
    const symbols = await IEX.get('/ref-data/symbols');
    dispatch({
        type: 'SYMBOLS',
        payload: symbols
    })
    //dispatches a second action, insteadof its own action creator to prevent over fetching. else times out.
    dispatch({
        type: 'RANDOM',
        payload: symbols.data.length
    })
    dispatch(() => console.log('here'))
}

export const fetchChartInfo = symbol => async dispatch => {
    const chartInfo = await IEX.get(`/stock/${symbol}/chart/1m`);
    dispatch({ 
        type: 'CHART',
        payload: chartInfo.data
    })
}
