from django.urls import path
from shop import views

urlpatterns = [
    path('',views.index,name='index'),
    path('detail/<int:id>/',views.detail,name='detail'),
    path('checkout/',views.checkout,name='checkout'),
    path('cart/',views.cart,name='cart')
    ]
