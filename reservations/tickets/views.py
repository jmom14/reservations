from django.shortcuts import render
from h11 import Response
from rest_framework import viewsets, status, response
from models import Ticket
from serializers import TicketSerializer


class TicketsViewSet(viewsets.Viewse):

    def create(self, request):
        name = request.data.get("name")
        user = request.user

        if not name or not user:
            return response.Response(status=status.HTTP_400_BAD_REQUEST)
        
        ticket = Ticket.objects.create(name=name, user=user)

        serializer = TicketSerializer(ticket).data
        return response.Response({ "data": serializer }, status.HTTP_201_CREATED)


    def update(self, request, pk=None):
        name = request.data.get("name")
        ticket = None

        try:
            ticket = Ticket.objects.get(id=pk)
        except Ticket.DoesNotExit:
            return response.Response(status=status.HTTP_404_NOT_FOUND)

        ticket.name = name
        ticket.save()

        serializer = TicketSerializer(ticket).data
        return response.Response({ "data": serializer }, status=status.HTTP_204_NO_CONTENT)


    def list(self, request):
        restaurant_id = request.data.get("restaurant_id")

        tickets = Ticket.objects.filter(restaurant_id=restaurant_id)

        serializer = TicketSerializer(tickets, many=True).data

        return response.Response({ "data": serializer }, status=status.HTTP_200_OK)


    def destroy(self, request, pk=None):
        ticket = None

        try:
            ticket = Ticket.objects.get(id=pk)
        except Ticket.DoesNotExit:
            return response.Response(status=status.HTTP_404_NOT_FOUND)

        if ticket.restaurant.user != request.user:
            return response.Response(status=status.HTTP_401_UNAUTHORIZED)

        ticket.delete()

        return response.Response(status=status.HTTP_204_NO_CONTENT)