from django.urls import path, include
from api.views import CreateUserView, UserListView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/create/', CreateUserView.as_view(), name='user-create'),
    path('users/token/', TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('users/token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('users/token/verfiy/', TokenVerifyView.as_view(), name='token-verify'),
    path("api-auth/", include("rest_framework.urls")),
]

