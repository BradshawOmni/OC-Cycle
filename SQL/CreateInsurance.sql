USE NextCARE
GO

/****** Object:  Table dbo.Insurance    Script Date: 6/1/2018 8:39:27 AM ******/
IF OBJECT_ID('dbo.Insurance', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Address
  ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Phone
  ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Email
	DROP TABLE dbo.Insurance
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Insurance(
	InsuranceId int IDENTITY(1,1) NOT NULL,
	CompanyName nvarchar(512) NOT NULL,
	PolicyNumber nvarchar(50) NOT NULL,
  PhoneId int NOT NULL,
  AddressId int NOT NULL,
  EmailId int NOT NULL,
 CONSTRAINT PK_Insurance PRIMARY KEY CLUSTERED
(
	InsuranceId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Phone FOREIGN KEY(PhoneId)
REFERENCES dbo.Phone (PhoneId)
GO

ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Phone
GO

ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Address FOREIGN KEY(AddressId)
REFERENCES dbo.Address (AddressId)
GO

ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Address
GO

ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Email FOREIGN KEY(EmailId)
REFERENCES dbo.Email (EmailId)
GO

ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Email
GO

