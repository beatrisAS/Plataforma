from rest_framework import serializers
from .models import Child

class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ["id", "first_name", "last_name", "birth_date", "guardian", "notes"]
