USE NextCARE
GO

/****** Object:  Table dbo.PersonPhone    Script Date: 6/3/2018 4:55:48 PM ******/
IF OBJECT_ID('dbo.PersonPhone', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.PersonPhone DROP CONSTRAINT FK_PersonPhone_Phone
  ALTER TABLE dbo.PersonPhone DROP CONSTRAINT FK_PersonPhone_Person
  DROP TABLE dbo.PersonPhone
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonPhone(
	PersonPhoneId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	PhoneId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_PersonPhone PRIMARY KEY CLUSTERED
(
	PersonPhoneId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.PersonPhone  WITH CHECK ADD  CONSTRAINT FK_PersonPhone_Person FOREIGN KEY(PersonId)
REFERENCES dbo.Person (PersonId)
GO

ALTER TABLE dbo.PersonPhone CHECK CONSTRAINT FK_PersonPhone_Person
GO

ALTER TABLE dbo.PersonPhone  WITH CHECK ADD  CONSTRAINT FK_PersonPhone_Phone FOREIGN KEY(PhoneId)
REFERENCES dbo.Phone (PhoneId)
GO

ALTER TABLE dbo.PersonPhone CHECK CONSTRAINT FK_PersonPhone_Phone
GO

