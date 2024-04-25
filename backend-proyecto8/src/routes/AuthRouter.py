from flask import Blueprint, request, jsonify
# from src.services.AuthService import AuthService
# from src.utils.Security import Security
from src.services.UsersService import UsersService
from src.models.usersModel import Users
from src.services.PersonsService import PersonsService
from src.models.personsModel import Persons


main = Blueprint('auth_blueprint',__name__)

@main.route('/usuario', methods=['GET'])
def get_usuario():
  get_usuarios = UsersService.get_users()
  if get_usuarios["success"]:
    result = [
    {'id': row[0], 'dni': row[1], 'type': row[2], 'name': row[3], 'password': row[4]}
    for row in get_usuarios["data"] #accedo a los datos que me devuelven get_users
    ]

    return resData(True, result, get_usuarios["message"])
  else:
    return resData(False, None, get_usuarios["message"])
    # return jsonify()




@main.route('/register', methods=['POST'])
def register():
  data = request.json


  DNIPerson = data['DNIPerson']
  IDUserType = 3
  NameUser = data['NameUser']
  PasswordUser = data['PasswordUser']

  DNIPerson = data['DNIPerson']
  NamePerson = data['NamePerson']
  EmailPerson = data['EmailPerson']
  AddressPerson = data['AddressPerson']
  TelephonePerson = data['TelephonePerson']

  if not (DNIPerson or IDUserType or NameUser or PasswordUser or DNIPerson or NamePerson or EmailPerson or AddressPerson or TelephonePerson):
    return resData(False, None, "Datos incompletos") 
  # ""
  else:
    persons = Persons(DNIPerson, NamePerson, EmailPerson, AddressPerson,  TelephonePerson)
    users = Users(0,DNIPerson, IDUserType, NameUser, PasswordUser)

    post_persons = PersonsService.post_persons(persons)
    if post_persons["success"]:
      post_users = UsersService.post_users(users)
      if post_users["success"]:
        return jsonify(post_users)  
      else:
        return resData(False, None, post_users["message"])
    else:
        return resData(False, None, post_persons["message"])




@main.route('/login', methods=['POST'])
def login():
  data = request.json
  NameUser = data['username']
  PasswordUser = data['password']
  
  print("NameUser:",NameUser)
  print("PasswordUser:",PasswordUser)

  users = Users(0,None,None,NameUser,PasswordUser)

  logged_users = UsersService.login(users)
  if logged_users["success"]:
    return resData(logged_users["success"],logged_users["data"],logged_users["message"])
  else:
    return resData(logged_users["success"],logged_users["data"],logged_users["message"])




@main.route('/logout', methods=['POST'])
def logout():
  logout = UsersService.logout()
  if logout["success"]:
    return resData(logout["success"],logout["data"],logout["message"])
  else:
    return resData(logout["success"],logout["data"], logout["message"])




def resData(success, data, message):
  return jsonify({"success": success,"data":data,"message":message})




#   users = Users(0,NameUser, PasswordUser,None)

#   authenticated_user = AuthService.login(users)
#   login = authenticated_user != None
#   if login:
#     encoded_token = Security.generate_token(authenticated_user)
#     return jsonify({'success': True, 'token': encoded_token})
#   else:
#     return jsonify({'success': False})
  