USE NextCARE
GO

/****** Object:  Table dbo.Dietary    Script Date: 6/1/2018 8:40:57 AM ******/
IF OBJECT_ID('dbo.Dietary', 'U') IS NOT NULL
	DROP TABLE dbo.Dietary
GO

/****** Object:  Table dbo.Dietary    Script Date: 6/1/2018 8:40:57 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Dietary
(
  DietaryId int IDENTITY(1,1) NOT NULL,
  Description nvarchar(50) NOT NULL,
  DietaryNeeds NVARCHAR(2048) NOT NULL,
  CONSTRAINT PK_Dietary PRIMARY KEY CLUSTERED
(
	DietaryId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

