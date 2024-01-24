from fastapi import APIRouter

task = APIRouter()

@task.get('/api/tasks')
async def get_all_tasks():
  return 'All tasks'

@task.get('/api/tasks/{id}')
async def get_one_task(id: str):
  return f'Task by id {id}'

@task.post('/api/tasks')
async def post_task():
  return 'Task saved'

@task.put('/api/tasks/{id}')
async def put_task(id: str):
  return f'Update task with id {id}'

@task.delete('/api/tasks/{id}')
async def remove_task(id: str):
  return f'Delete task with id {id}'