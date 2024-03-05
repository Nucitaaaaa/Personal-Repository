
from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    return render(request, "index.html")

def sobreNosotros(request):
    return render(request, "sobreNosotros.html")

def menu(request):
    return render(request, "menu.html")

def contactanos(request):
    return render(request, "contactanos.html")
