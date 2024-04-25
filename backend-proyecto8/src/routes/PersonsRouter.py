from flask import Blueprint, request
from src.services.PersonsService import PersonsService
from src.models.personsModel import Persons


main = Blueprint('persons_blueprint',__name__)

@main.route('/',methods=['GET'])
def get_persons():
  get_persons= PersonsService.get_persons()
  if get_persons:
    print(get_persons)
    return 'Lista de Persons actualizada, mira el Terminal cari'
  else:
    return 'No se pudo actualizar la Lista de Persons'


@main.route('/register', methods=['POST'])
def post_persons():
  data = request.json
  DNIPerson = data['DNIPerson']
  NamePerson = data['NamePerson']
  EmailPerson = data['EmailPerson']
  AddressPerson = data['AddressPerson']
  TelephonePerson = data['TelephonePerson']

  print(DNIPerson)
  print(NamePerson)
  print(EmailPerson)
  print(AddressPerson)
  print(TelephonePerson)

  persons = Persons(DNIPerson, NamePerson, EmailPerson, AddressPerson,TelephonePerson)
  
  post_persons= PersonsService.post_persons(persons)
  if post_persons:
    return 'Person agregado con exito'
  else:
    return 'No se pudo agregar el Person a la Lista de Proveedores'