USE NextCARE
GO

/****** Object:  Table dbo.BillingMain    Script Date: 5/29/2018 6:53:03 PM ******/
IF OBJECT_ID('dbo.BillingMain', 'U') IS NOT NULL
	DROP TABLE dbo.BillingMain
GO

/****** Object:  Table dbo.BillingMain    Script Date: 5/29/2018 6:53:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.BillingMain(
	BillingMainId int IDENTITY(1,1) NOT NULL,
	AccountNumber bigint NOT NULL,
	FirstName nvarchar(50) NOT NULL,
	MiddleName nvarchar(50) NULL,
	LastName nvarchar(50) NOT NULL,
	DueDate date NOT NULL,
	TotalDue decimal(18, 2) NOT NULL,
	BillingFrequencyId int NOT NULL,
	TuitionAssistanceAmount decimal(18, 2) NOT NULL,
	TuitionAssistanceAgencyId int NOT NULL,
	TuitionAssistanceLength decimal(18, 4) NOT NULL,
	UserId int NOT NULL,
 CONSTRAINT PK_BillingMain PRIMARY KEY CLUSTERED
(
	BillingMainId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

