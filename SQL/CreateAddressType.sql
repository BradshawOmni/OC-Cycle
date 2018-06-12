USE NextCARE
GO

/****** Object:  Table dbo.AddressType    Script Date: 6/1/2018 8:38:01 AM ******/
IF OBJECT_ID('dbo.AddressType', 'U') IS NOT NULL
  DROP TABLE dbo.AddressType
GO

/****** Object:  Table dbo.AddressType    Script Date: 6/1/2018 8:38:01 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.AddressType
(
  AddressTypeId int IDENTITY(1,1) NOT NULL,
  Description nvarchar(50) NOT NULL,
  CONSTRAINT PK_AddressType PRIMARY KEY CLUSTERED
(
	AddressTypeId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

