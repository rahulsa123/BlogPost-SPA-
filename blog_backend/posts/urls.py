from django.urls import path

from .views import (
    PostList,
    PostDetail,
    UserDetail,
    UserList,
    CustomObtainAuthView,
    PostCreateView,
)

urlpatterns = [
    path("users/", UserList.as_view()),
    path("post/create/", PostCreateView.as_view()),
    path("user/<int:pk>/", UserDetail.as_view()),
    path("post/<int:pk>/", PostDetail.as_view()),
    path("login/", CustomObtainAuthView.as_view()),
    path("", PostList.as_view()),
]
