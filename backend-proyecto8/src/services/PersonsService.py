from src.database.db_mysql import get_connection
from src.models.personsModel import Persons


class PersonsService():
  @classmethod
  def get_persons(cls):
    try:
      connection= get_connection()
      with connection.cursor() as cursor:
        cursor.execute("CALL sp_getPersons()")
        result= cursor.fetchall()
        print(result)

      connection.close()
      return 'Lista de Persons Actualizada'
    except Exception as ex:
      print(ex)

  @classmethod
  def post_persons(cls, persons: Persons):
    try:
      connection= get_connection()
      DNIPerson = persons.DNIPerson
      NamePerson = persons.NamePerson
      EmailPerson = persons.EmailPerson
      AddressPerson = persons.AddressPerson
      TelephonePerson = persons.TelephonePerson

      # print("asdasd")
      with connection.cursor() as cursor:
        cursor.execute("INSERT INTO persons (PK_DNIPerson,NamePerson,EmailPerson,AddressPerson,TelephonePerson) VALUES (%s, %s, %s, %s, %s)",(DNIPerson,NamePerson,EmailPerson,AddressPerson,TelephonePerson))
        connection.commit()

      connection.close()
      return {"success": True,"data":None,"message":"Se creo Person con exito"}
    except Exception as ex:
      return {"success": False,"data":None,"message":"No se pudo crear, pruebe con otro DNI"}
