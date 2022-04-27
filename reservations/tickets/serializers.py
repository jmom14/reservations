from rest_framework import serializers
from models import Ticket, Purchase, Restaurant
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("name", "email")

class TicketSerializer(serializers.ModelSerializer):

    def get_restaurant(self, ticket):
        return RestaurantSerializer(ticket.restaurant).data

    class Meta:
        model = Ticket
        fields = ("id", "name", "restaurant")


class PurchaseSerializer(serializers.ModelSerializer):

    def get_user(request, purchase):
        return purchase.user.name

    class Meta:
        model = Purchase
        fields = ("id", "user", "ticket")


class RestaurantSerializer(serializers.ModelSerializer):

    def get_user(self, restaurant):
        return restaurant.user.name

    class Meta:
        model = Restaurant
        fields = ("id", "name", "user")