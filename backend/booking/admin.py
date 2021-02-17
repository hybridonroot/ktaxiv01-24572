from django.contrib import admin
from .models import BookingTransaction, Message, Rating

admin.site.register(BookingTransaction)
admin.site.register(Message)
admin.site.register(Rating)

# Register your models here.
