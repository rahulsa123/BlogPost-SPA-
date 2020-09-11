from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import FileUploadParser, MultiPartParser
from .models import Post, Profile
from .serializers import (
    PostSerializer,
    UserSerializer,
    ProfileSerializer,
    PostCreateSerializer,
)
from .permissions import IsAuthorOrReadOnly, IsLoginUser

from django.contrib.auth.models import User
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_400_BAD_REQUEST


class CustomObtainAuthView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        return Response(
            {"token": token.key, "user_id": user.pk, "username": user.username}
        )


class PostList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = LimitOffsetPagination


class PostCreateView(generics.CreateAPIView):
    ueryset = Post.objects.all()
    serializer_class = PostCreateSerializer

    def post(self, request, *args, **kwargs):
        post = PostCreateSerializer(data=request.data)

        if post.is_valid():
            try:
                post = post.save(author=request.user)
            except Exception as e:
                print(e)
            return Response({"post_id": post.id}, status=status.HTTP_201_CREATED)
        else:
            return Response(post.errors, status=status.HTTP_400_BAD_REQUEST)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserList(generics.ListAPIView):

    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (IsLoginUser,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser]

    def put(self, request, pk, formate=None):
        user_s = UserSerializer(request.user, data=request.data)
        if user_s.is_valid():
            user = user_s.save()
            if len(request.FILES) == 1:
                # profile pic in provided in request
                user_profile = request.FILES["profile.image"]
                user.profile.image.save(
                    user_profile._name.replace(" ", "_"), user_profile
                )

            return self.get(request, pk)
        return Response(user_s.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_parsers(self):
        if getattr(self, "swagger_fake_view", False):
            return []
        return super().get_parsers()
