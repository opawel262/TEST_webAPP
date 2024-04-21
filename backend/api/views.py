from django.shortcuts import render
from rest_framework import generics

from core.models import User, Note
from api.serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    

class NoteListView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (IsAuthenticated,)
            
    def get_user(self):
        return self.request.user
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.get_user())
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get_queryset(self):
        return self.queryset.filter(user=self.get_user())


class NoteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = (IsAuthenticated,)
    
    def get_user(self):
        return self.request.user
    
    def get_queryset(self):
        return self.queryset.filter(user=self.get_user())
        