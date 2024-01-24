# Backend

## Crear entorno virtual:
- cd backend
- python -m venv venv

## Activar entorno:
- source venv/Scripts/activate

## Instalar dependencias:
pip install -r requirements.txt

## Iniciar servidor:
- Configurar URL de MongoDB en el archivo ".env" (basarse en ".env.example")
- uvicorn main:app --reload --env-file=".env"

## Acceder a Swagger:
- http://127.0.0.1:8000/docs

---
## Mongodb debe estar en ejecución
  - Usando Docker:
    - docker pull mongo
    - docker run --name mongodb -d -p 27017:27017 mongo
    - docker stop mongodb && docker rm mongodb