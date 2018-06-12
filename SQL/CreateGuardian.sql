USE NextCARE
GO

/****** Object:  Table dbo.Guardian ******/
IF OBJECT_ID('dbo.Guardian', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Guardian DROP CONSTRAINT FK_Guardian_GuardianType
  DROP TABLE dbo.Guardian;
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Guardian(
	GuardianId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	StudentId int NOT NULL,
	GuardianTypeId int NOT NULL
 CONSTRAINT PK_Guardian PRIMARY KEY CLUSTERED
(
	GuardianId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Guardian  WITH CHECK ADD  CONSTRAINT FK_Guardian_GuardianType FOREIGN KEY(GuardianTypeId)
REFERENCES dbo.GuardianType (GuardianTypeId)
GO

ALTER TABLE dbo.Guardian CHECK CONSTRAINT FK_Guardian_GuardianType
GO
