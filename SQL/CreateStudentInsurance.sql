USE NextCARE
GO

/****** Object:  Table dbo.StudentInsurance    Script Date: 6/3/2018 2:35:06 PM ******/
IF OBJECT_ID('dbo.StudentInsurance', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.StudentInsurance DROP CONSTRAINT FK_StudentInsurance_Insurance
  ALTER TABLE dbo.StudentInsurance DROP CONSTRAINT FK_StudentInsurance_Student
	DROP TABLE dbo.StudentInsurance
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentInsurance(
	StudentInsuranceId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	InsuranceId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentInsurance PRIMARY KEY CLUSTERED
(
	StudentInsuranceId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentInsurance  WITH CHECK ADD  CONSTRAINT FK_StudentInsurance_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentInsurance CHECK CONSTRAINT FK_StudentInsurance_Student
GO

ALTER TABLE dbo.StudentInsurance  WITH CHECK ADD  CONSTRAINT FK_StudentInsurance_Insurance FOREIGN KEY(InsuranceId)
REFERENCES dbo.Insurance (InsuranceId)
GO

ALTER TABLE dbo.StudentInsurance CHECK CONSTRAINT FK_StudentInsurance_Insurance
GO

