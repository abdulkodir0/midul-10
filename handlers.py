import os
from aiogram import Dispatcher, F, Bot
from aiogram.filters import CommandStart
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery
from keyboards import app_kb
from dotenv import load_dotenv

load_dotenv()
PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')

BOT_TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start(msg: Message):
    await msg.answer("Assalomu alaykum do`konimzga xush kelibsiz😊 \n\n"
                     "Bizning Dokonimizda turli hil noutbuklar olishingiz mumkin💻\n\n"
                     "Murojatlar uchun (99) 080-64-74📱", reply_markup=app_kb)


@dp.message(F.func(lambda msg: msg.web_app_data.data if msg.web_app_data else None))
async def get_btn(msg: Message):
    text = msg.web_app_data.data
    product_data = text.split("|")
    products = {}
    for i in range(len(product_data)):
        if len(product_data[i].split("/")) >= 3:
            title = product_data[i].split('/')[0]
            price = product_data[i].split('/')[1]
            quantity = product_data[i].split('/')[2]
            product = {
                "title": title,
                "price": int(price),
                "quantity": int(quantity)
            }
            products[i] = product
    print(products)
    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="Оплата",
        description="Оплата через Telegram bot",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=[LabeledPrice(label=f"{product['title']}({product['quantity']})",
                             amount=(product["price"] * product["quantity"]) * 100)
                for product in products.values()],
        max_tip_amount=50000,
        suggested_tip_amounts=[5, 10, 15, 20]
    )



@dp.pre_checkout_query()
async def pre_checkout(query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(query.id, ok=True)


@dp.message(F.func(lambda msg: msg.successful_payment if msg.successful_payment else None))
async def successful_payment(msg: Message):
    await msg.answer("To'lov uchun raxmat!")
