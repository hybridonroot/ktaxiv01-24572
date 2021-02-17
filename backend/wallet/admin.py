from django.contrib import admin
from .models import UserWallet, PaymentMethod, DriverWallet

admin.site.register(UserWallet)
admin.site.register(DriverWallet)
admin.site.register(PaymentMethod)

# Register your models here.
