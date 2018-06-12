USE NextCARE
GO

/****** Object:  Table dbo.Student    Script Date: 6/1/2018 8:39:51 AM ******/
IF OBJECT_ID('dbo.Student', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Student DROP CONSTRAINT FK_Student_StudentType
	DROP TABLE dbo.Student
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Student(
	StudentId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
  StudentTypeId int NOT NULL,
	GradeClassLevelId int NOT NULL,
  Alias nvarchar NULL,
  PhysicianId int NOT NULL,
 CONSTRAINT PK_Student PRIMARY KEY CLUSTERED
(
	StudentId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Student  WITH CHECK ADD  CONSTRAINT FK_Student_StudentType FOREIGN KEY(StudentTypeId)
REFERENCES dbo.StudentType (StudentTypeId)
GO

ALTER TABLE dbo.Student CHECK CONSTRAINT FK_Student_StudentType
GO

