from flask import Flask;
from flask_cors import CORS;
from src.routes import AuthRouter
from src.routes import ProductsRouter

from src.routes import PersonsRouter
from src.routes import UsersRouter


app= Flask(__name__)

CORS(app)

def init_app(config):
  app.config.from_object(config)
  app.register_blueprint(AuthRouter.main,url_prefix='/auth')
  app.register_blueprint(ProductsRouter.main,url_prefix='/products')

  return app