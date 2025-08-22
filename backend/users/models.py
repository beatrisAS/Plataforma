from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ("parent", "Responsável"),
        ("teacher", "Professor"),
        ("expert", "Especialista"),
        ("admin", "Administrador"),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="parent")

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
