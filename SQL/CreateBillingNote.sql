USE NextCARE
GO

/****** Object:  Table dbo.BillingNotes    Script Date: 5/29/2018 6:53:27 PM ******/
IF OBJECT_ID('dbo.BillingNote', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.BillingNote DROP CONSTRAINT FK_BillingNote_BillingMain
	DROP TABLE dbo.BillingNote
END
GO

/****** Object:  Table dbo.BillingNote    Script Date: 5/29/2018 6:53:27 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.BillingNote(
	BillingNoteId int IDENTITY(1,1) NOT NULL,
	BillingMainId int NOT NULL,
	NoteDate date NOT NULL,
	CreatedById int NOT NULL,
	AccountNote text NOT NULL,
 CONSTRAINT PK_BillingNotes PRIMARY KEY CLUSTERED
(
	BillingNoteId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE dbo.BillingNote WITH CHECK ADD CONSTRAINT FK_BillingNote_BillingMain FOREIGN KEY(BillingMainId)
REFERENCES dbo.BillingMain (BillingMainId);
GO

ALTER TABLE dbo.BillingNote CHECK CONSTRAINT FK_BillingNote_BillingMain;
GO

