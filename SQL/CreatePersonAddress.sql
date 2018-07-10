USE NextCARE
GO

/****** Object:  Table dbo.PersonAddress    Script Date: 6/3/2018 4:55:48 PM ******/
IF OBJECT_ID('dbo.PersonAddress', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.PersonAddress DROP CONSTRAINT FK_PersonAddress_Address
  ALTER TABLE dbo.PersonAddress DROP CONSTRAINT FK_PersonAddress_Person
  DROP TABLE dbo.PersonAddress
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonAddress(
	PersonAddressId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	AddressId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_PersonAddress PRIMARY KEY CLUSTERED
(
	PersonAddressId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.PersonAddress  WITH CHECK ADD  CONSTRAINT FK_PersonAddress_Person FOREIGN KEY(PersonId)
REFERENCES dbo.Person (PersonId)
GO

ALTER TABLE dbo.PersonAddress CHECK CONSTRAINT FK_PersonAddress_Person
GO

ALTER TABLE dbo.PersonAddress  WITH CHECK ADD  CONSTRAINT FK_PersonAddress_Address FOREIGN KEY(AddressId)
REFERENCES dbo.Address (AddressId)
GO

ALTER TABLE dbo.PersonAddress CHECK CONSTRAINT FK_PersonAddress_Address
GO

