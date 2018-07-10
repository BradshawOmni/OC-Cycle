USE NextCARE
GO

/****** Object:  Table dbo.Invoice    Script Date: 5/29/2018 6:53:54 PM ******/
IF OBJECT_ID('dbo.Invoice', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Invoice DROP CONSTRAINT FK_Invoice_InvoiceType
  DROP TABLE dbo.Invoice;
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Invoice
(
  InvoiceId int IDENTITY(1,1) NOT NULL,
  InvoiceOwnerId int NOT NULL,
  Paid bit NOT NULL,
  InvoiceTypeId int NOT NULL,
  InvoiceNumber NVARCHAR(30) NOT NULL,
  Description nvarchar(512) NOT NULL,
  CONSTRAINT PK_Invoice PRIMARY KEY CLUSTERED
(
	InvoiceId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Invoice  WITH CHECK ADD  CONSTRAINT FK_Invoice_InvoiceType FOREIGN KEY(InvoiceTypeId)
REFERENCES dbo.InvoiceType (InvoiceTypeId)
GO

ALTER TABLE dbo.Invoice CHECK CONSTRAINT FK_Invoice_InvoiceType
GO

