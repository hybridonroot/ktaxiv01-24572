from django.contrib import admin
from .models import VehicleLocation, ProfileLocation, MapLocation

admin.site.register(VehicleLocation)
admin.site.register(MapLocation)
admin.site.register(ProfileLocation)

# Register your models here.
