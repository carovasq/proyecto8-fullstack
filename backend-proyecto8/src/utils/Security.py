# import config from decouple
import datetime
import jwt
import pytz
import uuid
from src.models.usersModel import Users


class Security():
    jwt_key = "keycito!"
    tz = pytz.timezone("UTC")

    @classmethod
    def generate_token(cls, user:Users):
        try:
            current_time = datetime.datetime.now(tz = cls.tz)
            payload = {
                'jti':str(uuid.uuid4()),
                'iat':current_time,
                'nbf':current_time,
                'exp': current_time+datetime.timedelta(minutes=30),
                'id_user': user.IDUser,
                'fullname': user.DNIPerson.NamePerson
                # 'roles': user.IDUserType.id_usertype
                }
            return jwt.encode(payload, cls.secret, algorithm="HS256")
        except Exception as ex:
            print(ex)





    # @classmethod
    # def verify_token(cls, headers):
    #     if 'Authorization' in headers.keys():
    #         authorization = headers['Authorization']
    #         encoded_token = authorization.split(" ")[1]

    #         if (len(encoded_token) > 0):
    #             try:
    #                 payload = jwt.decode(encoded_token, cls.secret, algorithms=["HS256"])
    #                 roles = list(payload['roles'])

    #                 if 'Administrator' in roles:
    #                     return True
    #                 return False
    #             except (jwt.ExpiredSignatureError, jwt.InvalidSignatureError):
    #                 return False

    #     return False
        