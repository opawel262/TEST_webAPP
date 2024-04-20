from rest_framework import serializers
from core.models import User, Note


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password',]
        extra_kwargs = {
            'password': {'write_only': True
            }
        }
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class NoteSerializer(serializers.ModelSerializer):
    
    user = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Note
        fields = ['title', 'content', 'user', 'id', 'created_at', 'updated_at']

        extra_kwargs = {
            'user': {'read_only': True},
            'id': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True}
        }
