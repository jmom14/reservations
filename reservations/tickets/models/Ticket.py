from django.db import models
from models import Restaurant

class Ticket(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name="tickets")

