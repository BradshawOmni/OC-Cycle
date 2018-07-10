USE NextCARE
GO

/****** Object:  Table dbo.StudentDocument    Script Date: 6/1/2018 8:39:10 AM ******/
IF OBJECT_ID('dbo.StudentDocument', 'U') IS NOT NULL
BEGIN
   ALTER TABLE dbo.StudentDocument DROP CONSTRAINT FK_StudentDocument_Document
   ALTER TABLE dbo.StudentDocument DROP CONSTRAINT FK_StudentDocument_Student
	DROP TABLE dbo.StudentDocument
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentDocument(
	StudentDocumentId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	DocumentId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentDocument PRIMARY KEY CLUSTERED
(
	StudentDocumentId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentDocument  WITH CHECK ADD  CONSTRAINT FK_StudentDocument_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentDocument CHECK CONSTRAINT FK_StudentDocument_Student
GO

ALTER TABLE dbo.StudentDocument  WITH CHECK ADD  CONSTRAINT FK_StudentDocument_Document FOREIGN KEY(DocumentId)
REFERENCES dbo.Document (DocumentId)
GO

ALTER TABLE dbo.StudentDocument CHECK CONSTRAINT FK_StudentDocument_Document
GO

