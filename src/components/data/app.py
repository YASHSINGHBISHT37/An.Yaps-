# from fastapi import FastAPI
# import yfinance as yf

# app = FastAPI()

# @app.get("/api/stock/{symbol}")
# def get_stock(symbol: str):
#     stock = yf.Ticker(symbol)
#     info = stock.info
#     return {
#         "symbol": symbol,
#         "price": info.get("regularMarketPrice"),
#         "pe_ratio": info.get("trailingPE"),
#         "high_52w": info.get("fiftyTwoWeekHigh"),
#         "low_52w": info.get("fiftyTwoWeekLow"),
#         "market_cap": info.get("marketCap"),
#         "currency": info.get("currency")
#     }
