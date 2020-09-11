from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Post, Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("image",)


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=False)

    class Meta:
        model = get_user_model()
        fields = ("id", "first_name", "last_name", "profile")

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.profile.image = validated_data.get(
            "profile.image", instance.profile.image
        )
        instance.save()
        return instance


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False)

    class Meta:
        fields = ("id", "author", "title", "body", "created_at", "updated_at")
        model = Post


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("title", "body")
        model = Post