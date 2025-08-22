from rest_framework import viewsets
from .models import Child
from .serializers import ChildSerializer

class ChildViewSet(viewsets.ModelViewSet):
    queryset = Child.objects.all()
    serializer_class = ChildSerializer
