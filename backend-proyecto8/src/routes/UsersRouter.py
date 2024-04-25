from flask import Blueprint, request, jsonify
from src.services.UsersService import UsersService
from src.models.usersModel import Users


main = Blueprint('users_blueprint',__name__)

@main.route('/',methods=['GET'])
def get_users():
  get_users= UsersService.get_users()
  if get_users:
    print(get_users)
    return 'Lista de Users actualizada, mira el Terminal cari'
  else:
      return 'No se pudo actualizar la Lista de Users'


@main.route('/', methods=['POST'])
def post_users():
  IDUser = request.json['IDUser']
  DNIPerson = request.json['DNIPerson']
  IDUserType = request.json['IDUserType']
  NameUser = request.json['NameUser']
  PasswordUser = request.json['PasswordUser']

  print(IDUser)
  print(DNIPerson)
  print(IDUserType)
  print(NameUser)
  print(PasswordUser)

  users = Users(IDUser, DNIPerson, IDUserType, NameUser, PasswordUser)   

  post_users = UsersService.post_users(users)
  if post_users:
    return 'User agregado con exito'  
  else:
    return 'No se pudo agregar el User a la Lista de Users'