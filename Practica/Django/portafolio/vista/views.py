
from django.shortcuts import render, HttpResponse

def inicio(request):
    return render(request, "layout.html")

def ejemplo(request):
    return render(request, "ejemplo.html")
