USE NextCARE;
GO

SET IDENTITY_INSERT dbo.AddressType ON;
insert into AddressType	(AddressTypeId, Description) values(1, 'Home');
insert into AddressType	(AddressTypeId, Description) values(2, 'Work');
insert into AddressType	(AddressTypeId, Description) values(3, 'Vacation');
insert into AddressType	(AddressTypeId, Description) values(4, 'Other');
