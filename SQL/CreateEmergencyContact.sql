USE NextCARE
GO

/****** Object:  Table dbo.EmergencyContact    Script Date: 6/1/2018 8:39:10 AM ******/
IF OBJECT_ID('dbo.EmergencyContact', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.EmergencyContact DROP CONSTRAINT FK_EmergencyContact_Person
  ALTER TABLE dbo.EmergencyContact DROP CONSTRAINT FK_EmergencyContact_Student
	DROP TABLE dbo.EmergencyContact
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.EmergencyContact(
	EmergencyContactId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	PersonId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_EmergencyContact PRIMARY KEY CLUSTERED
(
	EmergencyContactId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.EmergencyContact  WITH CHECK ADD  CONSTRAINT FK_EmergencyContact_Person FOREIGN KEY(PersonId)
REFERENCES dbo.Person (PersonId)
GO

ALTER TABLE dbo.EmergencyContact CHECK CONSTRAINT FK_EmergencyContact_Person
GO

ALTER TABLE dbo.EmergencyContact  WITH CHECK ADD  CONSTRAINT FK_EmergencyContact_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.EmergencyContact CHECK CONSTRAINT FK_EmergencyContact_Student
GO
