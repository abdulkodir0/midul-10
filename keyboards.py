from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

web_app = WebAppInfo(url='https://abdulkodir0.github.io/midul-10/')

app_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text='Mini App', web_app=web_app)]
], resize_keyboard=True)

buy_ikb = InlineKeyboardMarkup(inline_keyboard=[

    [InlineKeyboardButton(text="To'lov", callback_data='buy')],
])
