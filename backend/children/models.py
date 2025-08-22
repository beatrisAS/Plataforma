from django.db import models
from django.conf import settings

class Child(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    guardian = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="children", on_delete=models.CASCADE
    )
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}".strip()
