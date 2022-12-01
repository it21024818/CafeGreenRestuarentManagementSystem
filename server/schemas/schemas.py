from datetime import datetime
from pydantic import BaseModel
from datetime import date

########################
# class UserBase(BaseModel):
#     email: str


# class UserCreate(UserBase):
#     password: str

# class User(UserBase):
#     id: int

#     class Config:
#         orm_mode = True
#############################

#customers

class Customer(BaseModel):
     cusId: int
     cusName: str
     cusEmail: str
     cusNum: str
     cusPassword: str

#payment methods

class Card(BaseModel):
     cardId: int
     cardtype: str
     cardnum: str
     exdate: str
     cvv: str
     cardname: str
     billaddress: str


#orders
class OrderIn(BaseModel):
     orderId: int
     cusName: str
     orderType: str
     orderDateTime: datetime
     fooditems: str
     quantity: int
     orderTotal: float
     status: str

class Order(BaseModel):
     orderId: int
     cusName: str
     orderType: str
     orderDateTime: datetime
     fooditems: str
     quantity: int
     orderTotal: float
     status: str


# ==== Order Details ====
class CusOrderIn(BaseModel):
     custOrderItem: str
     custOrderPrice: float
     custOrderDate: date

class CusOrder(BaseModel):
     custOrderId: int
     custOrderItem: str
     custOrderPrice: float
     custOrderDate: date


################navo
class ScheduleIn(BaseModel):
     scheduleName: str
     scheduleAddress: str
     scheduleMobilenumber: str
     scheduleDate: date
     scheduleTime: str
     scheduleOrderdetails: str

class Schedule(BaseModel):
     scheduleId: int
     scheduleName: str
     scheduleAddress: str
     scheduleMobilenumber: str
     scheduleDate: date
     scheduleTime: str
     scheduleOrderdetails: str

###############aludin
class Employee(BaseModel):
     eid: int
     efirstname: str
     elastname: str
     eaddress: str
     empemail: str
     salary: float
     hireddate: date
     noofleaves:int
     role: str
     emppass: str

class Request(BaseModel):
     reqid:int
     ereqdate: date
     etitle: str
     emessage: str

###############ERa
class Vendor(BaseModel):
    vid: int
    vname: str
    vcontact: int
    vtype: str
    vemail: str
    vzip: str
    vaddress: str

class Transac(BaseModel):
     stid: int
     stcname: str
     stdate: date
     stitem: str
     stquantity: int
     stamount: float

################Ashani
class StockIn(BaseModel):
     itemCategory: str
     itemName: str
     itemBrand: str
     itemQuantity: int
     storage: int
     requiredQ: int


class Stock(BaseModel):
     itemCode: int
     itemCategory: str
     itemName: str
     itemBrand: str
     itemQuantity: int
     storage: int
     requiredQ: int

# class StockreqIn(BaseModel):
#      itemName: str
#      requiredQ: int
#      duedate: int

# class Stockreq(BaseModel):
#      itemCode: str
#      itemName: str
#      requiredQ: int
#      duedate: int

###############sasindu


class Income(BaseModel):
    iTransID: int
    iDescription: str
    iValue: int
    iDate: date


class Expense(BaseModel):
    eTransID: int
    eDescription: str
    eValue: int
    eDate: date

class Feedback(BaseModel):
    feedbackId: int
    feedbackCustName: str
    feedbackCustEmail: str
    feedback: str

##menu
class Menu(BaseModel):
     mItemID: int
     mItemName: str
     mItemPrice: str
     mItemPhotoLink: str