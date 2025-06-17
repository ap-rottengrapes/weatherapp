from django.urls import path, include
from .views import *

urlpatterns = [
    path('weathermap/', weathermap, name='weathermap'),    
]
