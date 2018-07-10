USE NextCARE
GO

/****** Object:  Table dbo.StudentPhoto    Script Date: 6/1/2018 8:40:57 AM ******/
IF OBJECT_ID('dbo.StudentPhoto', 'U') IS NOT NULL
BEGIN
   ALTER TABLE dbo.StudentPhoto DROP CONSTRAINT FK_StudentPhoto_Photo
   ALTER TABLE dbo.StudentPhoto DROP CONSTRAINT FK_StudentPhoto_Student
	DROP TABLE dbo.StudentPhoto
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentPhoto
(
  StudentPhotoId int IDENTITY(1,1) NOT NULL,
  StudentId int NOT NULL,
  PhotoId int NOT NULL,
  IsPrimary bit NOT NULL,
  CONSTRAINT PK_StudentPhoto PRIMARY KEY CLUSTERED
(
	StudentPhotoId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentPhoto  WITH CHECK ADD  CONSTRAINT FK_StudentPhoto_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentPhoto CHECK CONSTRAINT FK_StudentPhoto_Student
GO

ALTER TABLE dbo.StudentPhoto  WITH CHECK ADD  CONSTRAINT FK_StudentPhoto_Photo FOREIGN KEY(PhotoId)
REFERENCES dbo.Photo (PhotoId)
GO

ALTER TABLE dbo.StudentPhoto CHECK CONSTRAINT FK_StudentPhoto_Photo
GO

