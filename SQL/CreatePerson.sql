USE NextCARE
GO

/****** Object:  Table dbo.Person    Script Date: 5/29/2018 6:54:36 PM ******/
IF OBJECT_ID('dbo.Person', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Person DROP CONSTRAINT FK_Person_PersonType
  ALTER TABLE dbo.Person DROP CONSTRAINT FK_Person_Race
  DROP TABLE dbo.Person;
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Person(
	PersonId int IDENTITY(1,1) NOT NULL,
	LastName nvarchar(50) NOT NULL,
	FirstName nvarchar(50) NOT NULL,
	MiddleName nvarchar(50) NULL,
	Suffix nvarchar(10) NULL,
	Prefix nvarchar(10) NULL,
	PersonTypeId int NOT NULL,
	SocialSecurityNumber nvarchar(255) NULL,
	SSNSalt nvarchar(50) NULL,
	Sex nchar(1) NOT NULL,
	Alias nvarchar(50) NULL,
	RaceId int NOT NULL,
	DateOfBirth date NOT NULL,
 CONSTRAINT PK_Person PRIMARY KEY CLUSTERED
(
	PersonId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Person  WITH CHECK ADD  CONSTRAINT FK_Person_PersonType FOREIGN KEY(PersonTypeId)
REFERENCES dbo.PersonType (PersonTypeId)
GO

ALTER TABLE dbo.Person CHECK CONSTRAINT FK_Person_PersonType
GO

ALTER TABLE dbo.Person  WITH CHECK ADD  CONSTRAINT FK_Person_Race FOREIGN KEY(RaceId)
REFERENCES dbo.Race (RaceId)
GO

ALTER TABLE dbo.Person CHECK CONSTRAINT FK_Person_Race
GO

