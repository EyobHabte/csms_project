# users/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .serializers import UserSerializer  # Import the correct UserSerializer

# Registration view allowing unauthenticated users
@api_view(['POST'])
@permission_classes([AllowAny])  # This allows public access (no token required)
def register_view(request):
    # Register logic
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login view allowing unauthenticated users
@api_view(['POST'])
@permission_classes([AllowAny])  # This allows public access (no token required)
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate the user
    user = authenticate(username=username, password=password)

    if user is not None:
        # Generate JWT tokens for the authenticated user
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'token': str(refresh.access_token),
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_400_BAD_REQUEST)
