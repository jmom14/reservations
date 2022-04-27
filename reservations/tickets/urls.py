from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tickets import views

router = DefaultRouter()
router.register("tickets", views.TicketsViewSet, basename="tickets")


urlpatterns = [
    path("", include(router.urls)),
]
