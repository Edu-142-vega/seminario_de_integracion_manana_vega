from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view

def calcular_area_perimetro_sector(request):
    try:
        base = float(request.GET.get('base'))
        altura = float(request.GET.get('altura'))
        area = (base * altura) / 2
        return JsonResponse({
            'base': base,
            'altura': altura,
            'area_perimetro': area
        })
    except (TypeError, ValueError):
        return JsonResponse({
            'error': 'Debe enviar base y altura validas para la zona del operativo'
        }, status=400)

@api_view(['POST'])
def promedio_delitos(request):
    try:
        expedientes = request.data.get('expedientes')
        if not expedientes or not isinstance(expedientes, list):
            return JsonResponse(
                {
                    'error': 'Debe enviar un arreglo de expedientes policiales'
                }, status=400
            )
        total_evidencias = 0
        for expediente in expedientes:
            evidencias = float(expediente.get('evidencias', 0))
            total_evidencias += evidencias
        cantidad_expedientes = len(expedientes)
        promedio = total_evidencias / cantidad_expedientes

        return JsonResponse({
            'cantidad_expedientes': cantidad_expedientes,
            'total_evidencias': total_evidencias,
            'promedio_evidencias': promedio
        })
    except Exception as e:
        return JsonResponse({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)