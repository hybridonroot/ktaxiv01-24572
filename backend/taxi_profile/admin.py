from django.contrib import admin
from .models import Document, UserProfile, DriverProfile, InviteCode, Notification

admin.site.register(Document)
admin.site.register(DriverProfile)
admin.site.register(Notification)
admin.site.register(InviteCode)
admin.site.register(UserProfile)

# Register your models here.
