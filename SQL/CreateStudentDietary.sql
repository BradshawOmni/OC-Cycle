USE NextCARE
GO

/****** Object:  Table dbo.StudentDietary    Script Date: 6/1/2018 8:40:57 AM ******/
IF OBJECT_ID('dbo.StudentDietary', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.StudentDietary DROP CONSTRAINT FK_StudentDietary_Dietary
  ALTER TABLE dbo.StudentDietary DROP CONSTRAINT FK_StudentDietary_Student
	DROP TABLE dbo.StudentDietary
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentDietary
(
  StudentDietaryId int IDENTITY(1,1) NOT NULL,
  StudentId int NOT NULL,
  DietaryId int NOT NULL,
  IsAlergy bit NOT NULL,
  CONSTRAINT PK_StudentDietary PRIMARY KEY CLUSTERED
(
	StudentDietaryId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentDietary  WITH CHECK ADD  CONSTRAINT FK_StudentDietary_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentDietary CHECK CONSTRAINT FK_StudentDietary_Student
GO

ALTER TABLE dbo.StudentDietary  WITH CHECK ADD  CONSTRAINT FK_StudentDietary_Dietary FOREIGN KEY(DietaryId)
REFERENCES dbo.Dietary (DietaryId)
GO

ALTER TABLE dbo.StudentDietary CHECK CONSTRAINT FK_StudentDietary_Dietary
GO

