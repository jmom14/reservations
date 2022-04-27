from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tickets import views

router = DefaultRouter()
router.register("tickets/", views.TicketsViewSet, basename="tickets")
router.register("purchase/", views.PurchaseViewSet, basename="purchase")


urlpatterns = [
    path("", include(router.urls)),
]
