USE NextCAREBase;
GO

BEGIN TRAN
SET IDENTITY_INSERT dbo.AddressType ON;
GO
INSERT INTO AddressType	(AddressTypeId, Description) VALUES(1, 'Home');
INSERT INTO AddressType	(AddressTypeId, Description) VALUES(2, 'Work');
INSERT INTO AddressType	(AddressTypeId, Description) VALUES(3, 'Vacation');
INSERT INTO AddressType	(AddressTypeId, Description) VALUES(4, 'Other');
SET IDENTITY_INSERT dbo.AddressType OFF;
GO

SET IDENTITY_INSERT EmailType ON;
GO
INSERT INTO EmailType (EmailTypeId, Description) VALUES(1, 'Home');
INSERT INTO EmailType (EmailTypeId, Description) VALUES(2, 'Work');
INSERT INTO EmailType (EmailTypeId, Description) VALUES(3, 'Junk');
INSERT INTO EmailType (EmailTypeId, Description) VALUES(4, 'Other');
SET IDENTITY_INSERT EmailType OFF;
GO

SET IDENTITY_INSERT GuardianType ON;
GO
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(1, 'Parent');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(2, 'Guardian');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(3, 'Relative');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(4, 'Mother');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(5, 'Father');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(6, 'Bother');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(7, 'Sister');
SET IDENTITY_INSERT GuardianType OFF;
GO

SET IDENTITY_INSERT PersonType ON;
GO
insert into PersonType	(PersonTypeId, Description) values(1, 'Student');
insert into PersonType	(PersonTypeId, Description) values(2, 'Parent');
insert into PersonType	(PersonTypeId, Description) values(3, 'Guardian');
insert into PersonType	(PersonTypeId, Description) values(4, 'Mother');
insert into PersonType	(PersonTypeId, Description) values(5, 'Father');
insert into PersonType	(PersonTypeId, Description) values(6, 'Sibling');
insert into PersonType	(PersonTypeId, Description) values(7, 'Brother');
insert into PersonType	(PersonTypeId, Description) values(8, 'Sister');
SET IDENTITY_INSERT PersonType OFF;
GO

SET IDENTITY_INSERT PhoneType ON;
GO
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(1, 'Cell');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(2, 'Work');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(3, 'Home');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(4, 'Other');
SET IDENTITY_INSERT PhoneType OFF;
GO

SET IDENTITY_INSERT Race ON;
GO
INSERT INTO Race	(RaceId, Description) VALUES(1, 'White');
INSERT INTO Race	(RaceId, Description) VALUES(2, 'Black');
INSERT INTO Race	(RaceId, Description) VALUES(3, 'Asian');
INSERT INTO Race	(RaceId, Description) VALUES(4, 'Native Hawaiian');
INSERT INTO Race	(RaceId, Description) VALUES(5, 'American Indian');
INSERT INTO Race	(RaceId, Description) VALUES(6, 'Other');
SET IDENTITY_INSERT Race OFF;
GO

SET IDENTITY_INSERT StudentType ON;
GO
INSERT INTO StudentType (StudentTypeId, Description) VALUES(1, 'Toddler');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(2, 'Kindegarden');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(3, 'Grade School');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(4, 'Old');
SET IDENTITY_INSERT StudentType OFF;
GO
--ROLLBACK TRAN
COMMIT TRAN