import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const StockDataContext = createContext()

export const StockDataProvider = ({ children }) => {
    const [stockData, setStockData] = useState(null)
    const [loading, setLoading] = useState(null)

    const API_Key = 'd3qko91r01quv7kbaq4gd3qko91r01quv7kbaq50'

    useEffect(() => {
        if (!symbol) return;
        const data = async () => {
            try {
                const res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_Key}`)
                const profileRes = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${API_Key}`)
                const profileRes2 = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${API_Key}`)

                setStockData({
                    ...res.data,
                    ...profileRes.data,
                    ...profileRes2.data,
                })
            } catch (error) {
                console.error('Error fetching stock data:', error);
                setLoading(false);
            }
        }

        data()
    }, [])


    return (
        <StockDataContext.Provider value={{ stockData, loading }}>
            {children}
        </StockDataContext.Provider>
    )
}

