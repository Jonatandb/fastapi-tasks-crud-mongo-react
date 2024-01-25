# Backend

## Crear entorno virtual:
- cd backend
- python -m venv venv (Sólo requerido la primera vez)

## Activar entorno:
- source venv/Scripts/activate

## Instalar dependencias:
pip install -r requirements.txt

## Requisitos
- MongoDB debe estar funcionando
  - Ver más abajo cómo ejecutarlo con Docker como alternativa, en caso de no tenerlo instalado.
- Configurar URL de MongoDB en el archivo ".env" (basarse en ".env.example")

## Iniciar servidor:
- uvicorn main:app --reload --env-file=".env"
  - Para que se ejecute en un puerto diferente del 8000 (por defecto), especificar otro usando el flag "--port":
    - uvicorn main:app --reload --env-file=".env" --port 3000

## Acceso a Swagger:
- http://127.0.0.1:8000/docs

---
## Mongodb desde un contenedor Docker
En caso de desear utilizar MongoDB desde dentro de contendor Docker:
- Descargar imagen (solo la primera vez):
  - docker pull mongo
- Iniciar contenedor:
  - docker run --name mongodb -d -p 27017:27017 mongo
    - Luego de ejecutar esto ya se puede conectar a Mongo mediante la url:
      - ```mongodb://localhost```
- Detener el contenedor:
  - docker stop mongodb && docker rm mongodb