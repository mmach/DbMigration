
CREATE TABLE [dbo].[PatchTable](
	[PatchId] [int] IDENTITY(1,1) ,
	[Release] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[StartDate] [datetime] DEFAULT GETDATE() ,
	[FinishDate] [datetime] NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[IssueId] [int] NULL,
	[Title] [nvarchar](300) NOT NULL,
 CONSTRAINT [PK_PatchTable] PRIMARY KEY CLUSTERED 
(
	[PatchId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY];

------------------!NEW_ELEMENT!----------------------------------
