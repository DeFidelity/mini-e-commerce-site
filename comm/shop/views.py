from django.shortcuts import render
from .models import Product
from django.core.paginator import Paginator
from django.views import View
# Create your views here.

def index(request):
    product_objects = Product.objects.all()

    #Simple search with get
    searched_products = None
    product_name = request.GET.get('item_name')
    if product_name != '' and product_name != None:
        searched_products = product_objects.filter(title__icontains=product_name)

    #paginator
    paginator = Paginator(product_objects,3)
    page = request.GET.get('page')
    pages = paginator.get_page(page)


    context ={
        'products': product_objects,
        'searched':searched_products,
        'page':pages,
    }

    return render(request,'shop/index.html',context)


def detail(request,id):
    product_object = Product.objects.get(id=id)

    context={
        'product_object':product_object
    }

    return render(request,'shop/detail.html',context)

def checkout(request):
    return render(request,'shop/checkout.html')

def cart(request):
    return render(request,'shop/cart.html')
