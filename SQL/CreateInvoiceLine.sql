USE NextCARE
GO

/****** Object:  Table dbo.InvoiceLine    Script Date: 5/29/2018 6:53:54 PM ******/
IF OBJECT_ID('dbo.InvoiceLine', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.InvoiceLine DROP CONSTRAINT FK_InvoiceLine_Invoice
  DROP TABLE dbo.InvoiceLine;
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.InvoiceLine
(
  InvoiceLineId int IDENTITY(1,1) NOT NULL,
  InvoiceId int NOT NULL,
  Paid bit NOT NULL,
  Quantity int NOT NULL,
  Cost DECIMAL NOT NULL,
  Description nvarchar(512) NOT NULL,
  CONSTRAINT PK_InvoiceLine PRIMARY KEY CLUSTERED
(
	InvoiceLineId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.InvoiceLine  WITH CHECK ADD  CONSTRAINT FK_InvoiceLine_Invoice FOREIGN KEY(InvoiceId)
REFERENCES dbo.Invoice (InvoiceId)
GO

ALTER TABLE dbo.InvoiceLine CHECK CONSTRAINT FK_InvoiceLine_Invoice
GO

