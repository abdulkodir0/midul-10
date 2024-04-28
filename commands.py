from aiogram.types import BotCommand

commands = [
    BotCommand(command='start', description='Boshlash'),
    BotCommand(command='registration', description="Ro'yxatdan o'tish"),
    BotCommand(command='products', description='Mahsulotlar'),
    BotCommand(command='orders', description='Zakazlarim'),
    BotCommand(command='favorites', description='sevimlilar'),
    BotCommand(command='get_favorites', description="Sevimlilarni k`orish")
]
