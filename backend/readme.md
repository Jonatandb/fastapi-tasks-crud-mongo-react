# Backend

## Crear entorno virtual:
- cd backend
- python -m venv venv

## Activar entorno:
- source venv/Scripts/activate

## Instalar dependencias:
pip install -r requirements.txt

## Iniciar servidor:
- uvicorn main:app --reload

## Acceder a Swagger:
- http://127.0.0.1:8000/docs
