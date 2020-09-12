from rest_framework import permissions


class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read Only permission for every one
        if request.method in permissions.SAFE_METHODS:
            return True
        # write permission for only allowed to author
        return obj.author == request.user


class IsLoginUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read Only permission for every one
        if request.method in permissions.SAFE_METHODS:
            return True
        # write permission for only allowed to author
        return obj == request.user
