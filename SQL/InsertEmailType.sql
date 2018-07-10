USE NextCARE;
GO

SET IDENTITY_INSERT EmailType ON;
insert into EmailType (EmailTypeId, Description) values(1, 'Home');
insert into EmailType (EmailTypeId, Description) values(2, 'Work');
insert into EmailType (EmailTypeId, Description) values(3, 'Junk');
insert into EmailType (EmailTypeId, Description) values(4, 'Other');
