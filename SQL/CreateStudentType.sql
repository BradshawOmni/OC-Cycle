USE NextCARE
GO

/****** Object:  Table [dbo].[StudentType]    Script Date: 6/1/2018 8:38:30 AM ******/
IF OBJECT_ID('dbo.StudentType', 'U') IS NOT NULL
	DROP TABLE dbo.StudentType
GO

/****** Object:  Table [dbo].[StudentType]    Script Date: 6/1/2018 8:38:30 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentType
(
  StudentTypeId int IDENTITY(1,1) NOT NULL,
  Description nvarchar(50) NOT NULL
    CONSTRAINT PK_StudentType PRIMARY KEY CLUSTERED
(
	StudentTypeId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

