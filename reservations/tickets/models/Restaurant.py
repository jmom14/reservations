from django.db import models
from django.contrib.auth import get_user_model

class Restaurant(models.Models):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    user = models.ForeignKey(to=get_user_model(), on_delete=models.CASCADE, related_name="restaurants")
    