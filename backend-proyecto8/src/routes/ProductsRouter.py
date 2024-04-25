from flask import Blueprint, request, jsonify
from src.services.ProductsService import ProductsService
from src.models.productsModel import Products


main = Blueprint('products_blueprint',__name__)

@main.route('/productos',methods=['GET'])
def get_products():
  get_productos = ProductsService.get_products()
  if get_productos:
    result = [
    {'idProduct': row[0], 'idUser': row[1], 'ProductCategory': row[2], 'name': row[3], 'description': row[4], 'price': row[5], 'dimensions': row[6], 'state': row[7], 'img': row[8]}
    for row in get_productos
    ]
    return jsonify(result)
  else:
    return resData(False, None, get_productos["message"])




@main.route('/crear', methods=['POST'])
def crear():
  data = request.json
  IDUser = data['IDUser']
  IDProductCategory = data['IDProductCategory']
  NameProduct = data['NameProduct']
  DescriptionProduct = data['DescriptionProduct']
  PriceProduct = data['PriceProduct']
  DimensionsProduct = data['DimensionsProduct']
  DimensionsProduct = data['DimensionsProduct']
  StateProduct = data['StateProduct']
  ImagenProduct = data['ImagenProduct']

  products = Products(0,IDUser, IDProductCategory, NameProduct, DescriptionProduct,PriceProduct,DimensionsProduct,StateProduct,ImagenProduct)

  post_products = ProductsService.post_products(products)
  if post_products["success"]:
    return jsonify(post_products)  
  else:
    return resData(post_products["success"],post_products["data"], post_products["message"])




def resData(success, data, message):
  return jsonify({"success": success,"data":data,"message":message})