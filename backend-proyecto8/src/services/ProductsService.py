from flask import jsonify
from src.database.db_mysql import get_connection
from src.models.productsModel import Products


class ProductsService():
  @classmethod
  def get_products(cls):
    try:
      connection= get_connection()
      with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM products")
        result= cursor.fetchall()
        print("LISTA DE PRODUCTOS!!:",result)

      connection.close()
      return {"success": True,"data":result,"message":"Listado de Products"}
    except Exception as ex:
      return {"success": False,"data":None,"message":"400"}

  @classmethod
  def post_products(cls, products: Products):
    try:
      connection= get_connection()
      # PK_IDProduct = products.IDProduct
      FK_IDUser = products.IDUser
      FK_IDProductCategory = products.IDProductCategory
      NameProduct = products.NameProduct
      DescriptionProduct = products.DescriptionProduct
      PriceProduct = products.PriceProduct
      DimensionsProduct = products.DimensionsProduct
      StateProduct = products.StateProduct
      ImagenProduct = products.ImagenProduct

      with connection.cursor() as cursor:
        cursor.execute("INSERT INTO products (FK_IDUser,FK_IDProductCategory,NameProduct,DescriptionProduct,PriceProduct,DimensionsProduct,StateProduct,ImagenProduct) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",(FK_IDUser,FK_IDProductCategory,NameProduct,DescriptionProduct,PriceProduct,DimensionsProduct,StateProduct,ImagenProduct))
        connection.commit()

      connection.close()
      return {"success": True,"data":None,"message":"Se creo Product con exito"}
    except Exception as ex:
      return {"success": False,"data":None,"message":"No se pudo crear, pruebe con otro Product"}
