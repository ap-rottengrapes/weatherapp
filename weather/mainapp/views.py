from django.shortcuts import render

def weathermap(request):
    return render(request, 'mainapp/weathermap.html')