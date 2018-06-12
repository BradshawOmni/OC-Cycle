USE NextCARE
GO

/****** Object:  Table dbo.PersonEmail    Script Date: 6/3/2018 4:55:48 PM ******/
IF OBJECT_ID('dbo.PersonEmail', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.PersonEmail DROP CONSTRAINT FK_PersonEmail_Email
  ALTER TABLE dbo.PersonEmail DROP CONSTRAINT FK_PersonEmail_Person
  DROP TABLE dbo.PersonEmail
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonEmail
(
  PersonEmailId int IDENTITY(1,1) NOT NULL,
  PersonId int NOT NULL,
  EmailId int NOT NULL,
  IsPrimary bit NOT NULL,
  CONSTRAINT PK_PersonEmail PRIMARY KEY CLUSTERED
(
	PersonEmailId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.PersonEmail  WITH CHECK ADD  CONSTRAINT FK_PersonEmail_Person FOREIGN KEY(PersonId)
REFERENCES dbo.Person (PersonId)
GO

ALTER TABLE dbo.PersonEmail CHECK CONSTRAINT FK_PersonEmail_Person
GO

ALTER TABLE dbo.PersonEmail  WITH CHECK ADD  CONSTRAINT FK_PersonEmail_Email FOREIGN KEY(EmailId)
REFERENCES dbo.Email (EmailId)
GO

ALTER TABLE dbo.PersonEmail CHECK CONSTRAINT FK_PersonEmail_Email
GO

