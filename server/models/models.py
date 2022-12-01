from sqlalchemy import Boolean,Table, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
#from config.db import engine, Base, metadata
from config.db import engine, metadata
import sqlalchemy

###############################

# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     #name = Column(String)
#     email = Column(String(225), unique=True, index=True)
#     password = Column(String(225))

####################################

customers = sqlalchemy.Table(
    "customers", 
    metadata, 
    sqlalchemy.Column("cusId", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("cusName", sqlalchemy.String(225)),
    sqlalchemy.Column("cusEmail", sqlalchemy.String(225)),
    sqlalchemy.Column("cusNum", sqlalchemy.String(225)),
    sqlalchemy.Column("cusPassword", sqlalchemy.String(225)),
)

cards = sqlalchemy.Table(
    "cards",
    metadata,
    sqlalchemy.Column("cardId", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("cardtype", sqlalchemy.String(225)),
    sqlalchemy.Column("cardnum", sqlalchemy.String(225)),
    sqlalchemy.Column("exdate", sqlalchemy.String(225)),
    sqlalchemy.Column("cvv", sqlalchemy.String(225)),
    sqlalchemy.Column("cardname", sqlalchemy.String(225)),
    sqlalchemy.Column("billaddress", sqlalchemy.String(225)),

)

orders = sqlalchemy.Table(
    "orders",
    metadata,
    sqlalchemy.Column("orderId", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("cusName", sqlalchemy.String(225)),
    sqlalchemy.Column("orderType", sqlalchemy.String(225)),
    sqlalchemy.Column("orderDateTime", sqlalchemy.DATETIME),
    sqlalchemy.Column("fooditems", sqlalchemy.String(225)),
    sqlalchemy.Column("quantity", sqlalchemy.Integer),
    sqlalchemy.Column("orderTotal", sqlalchemy.Float),
    sqlalchemy.Column("status", sqlalchemy.String(225)),

)

################kaveen
cusOrders = sqlalchemy.Table(
    "cusOrders",
    metadata,
    sqlalchemy.Column("custOrderId", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("custOrderItem", sqlalchemy.String(225)),
    sqlalchemy.Column("custOrderPrice", sqlalchemy.Float),
    sqlalchemy.Column("custOrderDate", sqlalchemy.Date),

)


feedbacks = sqlalchemy.Table(
    "feedbacks", 
    metadata, 
    sqlalchemy.Column("feedbackId",sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("feedbackCustName", sqlalchemy.String(225)),
    sqlalchemy.Column("feedbackCustEmail", sqlalchemy.String(225)),
    sqlalchemy.Column("feedback", sqlalchemy.String(225)),
)

###############navo
schedules = sqlalchemy.Table(
    "schedules", 
    metadata, 
    sqlalchemy.Column("scheduleId", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("scheduleName", sqlalchemy.String(150)),
    sqlalchemy.Column("scheduleAddress", sqlalchemy.String(200)),
    sqlalchemy.Column("scheduleMobilenumber", sqlalchemy.String(150)),
    sqlalchemy.Column("scheduleDate", sqlalchemy.Date),
    sqlalchemy.Column("scheduleTime", sqlalchemy.String(100)),
    sqlalchemy.Column("scheduleOrderdetails", sqlalchemy.String(225)),
)

################aludin
employee = sqlalchemy.Table(
    "employee", 
    metadata, 
    sqlalchemy.Column("eid", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("empemail", sqlalchemy.String(225)),
    sqlalchemy.Column("emppass", sqlalchemy.String(225)),
    sqlalchemy.Column("efirstname", sqlalchemy.String(225)),
    sqlalchemy.Column("elastname", sqlalchemy.String(225)),
    sqlalchemy.Column("eaddress", sqlalchemy.String(225)),
    sqlalchemy.Column("salary", sqlalchemy.String(225)),
    sqlalchemy.Column("hireddate", sqlalchemy.Date),
    sqlalchemy.Column("role", sqlalchemy.String(225)),
    sqlalchemy.Column("noofleaves", sqlalchemy.Integer)
    
)

request = sqlalchemy.Table(
    "request",
    metadata,
    sqlalchemy.Column("reqid", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("ereqdate", sqlalchemy.Date),
    sqlalchemy.Column("etitle", sqlalchemy.String(225)),
    sqlalchemy.Column("emessage", sqlalchemy.String(225))
)

####################################Era

vendors = sqlalchemy.Table(
    "vendors",
    metadata,
    sqlalchemy.Column("vid", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("vname", sqlalchemy.String(225)),
    sqlalchemy.Column("vtype", sqlalchemy.String(225)),
    sqlalchemy.Column("vemail", sqlalchemy.String(225)),
    sqlalchemy.Column("vcontact", sqlalchemy.Integer),
    sqlalchemy.Column("vzip", sqlalchemy.String(225)),
    sqlalchemy.Column("vaddress", sqlalchemy.String(225)),
)

transac = sqlalchemy.Table(
    "transac",
    metadata,
    sqlalchemy.Column("stid", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("stcname", sqlalchemy.String(225)),
    sqlalchemy.Column("stdate", sqlalchemy.Date),
    sqlalchemy.Column("stitem", sqlalchemy.String(225)),
    sqlalchemy.Column("stquantity", sqlalchemy.Integer),
    sqlalchemy.Column("stamount", sqlalchemy.Float),
)

#############ashani
stocks = sqlalchemy.Table(
	"stocks",
	metadata,
	sqlalchemy.Column("itemCode", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("itemCategory", sqlalchemy.String(225)),
    sqlalchemy.Column("itemName", sqlalchemy.String(225)),
	sqlalchemy.Column("itemBrand", sqlalchemy.String(225)),
	sqlalchemy.Column("itemQuantity", sqlalchemy.Integer),
	sqlalchemy.Column("storage", sqlalchemy.Integer),
	sqlalchemy.Column("requiredQ", sqlalchemy.Integer),
)


# stockreqs = sqlalchemy.Table(
# 	"stockreqs",
# 	metadata,
# 	sqlalchemy.Column("itemCode", sqlalchemy.String(10)), primary_key=True),
#     sqlalchemy.Column("itemName", sqlalchemy.String(225)),
# 	sqlalchemy.Column("requiredQ", sqlalchemy.Integer),
# 	sqlalchemy.Column("duedate", sqlalchemy.Integer),
# )


##########sasindu
incomes = sqlalchemy.Table(
    "incomes", 
    metadata, 
    sqlalchemy.Column("iTransID",sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("iDescription", sqlalchemy.String(225)),
    sqlalchemy.Column("iValue", sqlalchemy.Integer),
    sqlalchemy.Column("iDate", sqlalchemy.Date),
)

expenses = sqlalchemy.Table(
    "expenses",
    metadata,
    sqlalchemy.Column("eTransID",sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("eDescription", sqlalchemy.String(225)),
    sqlalchemy.Column("eValue", sqlalchemy.Integer),
    sqlalchemy.Column("eDate", sqlalchemy.Date),
)

menu = sqlalchemy.Table(
    "menu", 
    metadata, 
    sqlalchemy.Column("mItemID", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("mItemName", sqlalchemy.String(1000)),
    sqlalchemy.Column("mItemPrice", sqlalchemy.String(50)),
    sqlalchemy.Column("mItemPhotoLink", sqlalchemy.String(10000)),
        
)


metadata.create_all(engine)