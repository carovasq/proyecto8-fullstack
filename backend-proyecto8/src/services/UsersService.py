from flask import jsonify
from src.database.db_mysql import get_connection
from src.models.usersModel import Users


class UsersService():
  @classmethod
  def get_users(cls):
    try:
      connection= get_connection()
      with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM users")
        result= cursor.fetchall()
        print("LISTA DE USUARIOS!!:",result)

      connection.close()
      # return(result)
      return {"success": True,"data":result,"message":"Listado de Users"}
    except Exception as ex:
      # return (ex)
      return {"success": False,"data":None,"message":"400"}

  @classmethod
  def post_users(cls, users: Users):
    try:
      connection= get_connection()
      # IDUser = users.IDUser
      FK_DNIPerson = users.DNIPerson
      FK_IDUserType = users.IDUserType
      NameUser = users.NameUser
      PasswordUser = users.PasswordUser

      user_data = (FK_DNIPerson,FK_IDUserType,NameUser,PasswordUser)

      with connection.cursor() as cursor:
        cursor.execute("INSERT INTO users (FK_DNIPerson ,FK_IDUserType ,NameUser,PasswordUser) VALUES (%s, %s, %s, %s)",user_data)
        connection.commit()

      connection.close()
      return {"success": True,"data":None,"message":"Se creo User con exito"} 
    except Exception as ex:
      return {"success": False,"data":None,"message":"400"}

  @classmethod
  def login(cls, users: Users):
    print("holita")
    try:
      connection= get_connection()
      NameUser = users.NameUser
      PasswordUser = users.PasswordUser


      with connection.cursor() as cursor:
        cursor.execute(f"SELECT * FROM users WHERE NameUser = '{NameUser}'" )
        usuario= cursor.fetchall()
      if not (usuario):
        response = {"success": False,"data":None,"message":"el nombre usuario no existe"}
      else:
        print("existe!")
        print(usuario[0][3])
        print(usuario[0][4])
        if not (usuario[0][4] == PasswordUser):
          response = {"success": False,"data":None,"message":"la contraseña no coincide"}
        else:
          response = {"success": True,"data":usuario[0],"message":"iniciaste sesion"}

      connection.close()
      return response
    except Exception as ex:
      return {"success": False,"data":None,"message":"400"}
      

  @classmethod
  def logout(cls):
    return {"success": True,"data":None,"message":"cerraste sesion"}





# usuario = usuariodedatabase
      # si usuario no existe, retorna mensaje de error
# usuario.password = passworduser
      # si la contraseña no coincide, retorna mensaje de error
      # si la contraseña coincide, mensaje de exito y usuario inicia sesion

