# users/serializers.py
from rest_framework import serializers
from .models import User  # Import your custom user model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Use your custom User model
        fields = ('username', 'password', 'email', 'role')  # Include the necessary fields
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data.get('role', '')  # Handle optional custom field
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user
