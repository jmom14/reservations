from django.db import models
from django.contrib.auth import get_user_model
from models import Ticket

class Purchase(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(to=get_user_model(), on_delete=models.CASCADE, related_name="purchases")
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE, related_name="purchases")
