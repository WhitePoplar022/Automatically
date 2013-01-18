CREATE TABLE [Children] (
[GUID] nvarchar(200) COLLATE Chinese_PRC_CI_AS NOT NULL,
[ParentID] nvarchar(200) COLLATE Chinese_PRC_CI_AS NULL,
[ChildID] int NULL,
[ChildIntNumber] int NULL,
[ChildIntEnum] int NULL,
[ChildMoney] decimal(18,8) NULL,
[ChildDatetime] datetime2(7) NULL,
[ChildVarchar] nvarchar(200) COLLATE Chinese_PRC_CI_AS NULL,
[ChildLongVarchar] nvarchar(2000) COLLATE Chinese_PRC_CI_AS NULL,
[ChildBit] bit NULL,
[ChildTinyintBool] tinyint NULL,
[ChildTinyintEnum] tinyint NULL,
[ChildText] ntext COLLATE Chinese_PRC_CI_AS NULL,
[ChildBinary] image NULL,
CONSTRAINT [PK_Children] PRIMARY KEY ([GUID]) 
)
GO

CREATE TABLE [Parents] (
[GUID] nvarchar(200) COLLATE Chinese_PRC_CI_AS NOT NULL,
[ParentIntNumber] int NULL,
[ParentIntEnum] int NULL,
[ParentMoney] decimal(18,8) NULL,
[ParentDatetime] datetime2(7) NULL,
[ParentVarchar] nvarchar(200) COLLATE Chinese_PRC_CI_AS NULL,
[ParentLongVarchar] nvarchar(2000) COLLATE Chinese_PRC_CI_AS NULL,
[ParentBit] bit NULL,
[ParentTinyintBool] tinyint NULL,
[ParentTinyintEnum] tinyint NULL,
[ParentText] ntext COLLATE Chinese_PRC_CI_AS NULL,
[ParentBinary] image NULL,
CONSTRAINT [PK_Parents] PRIMARY KEY ([GUID]) 
)
GO

CREATE TABLE [Singles] (
[ID] int NOT NULL,
[SingleIntNumber] int NULL,
[SingleIntEnum] int NULL,
[SingleMoney] decimal(18,8) NULL,
[SingleDatetime] datetime2(7) NULL,
[SingleVarchar] nvarchar(200) COLLATE Chinese_PRC_CI_AS NULL,
[SingleLongVarchar] nvarchar(2000) COLLATE Chinese_PRC_CI_AS NULL,
[SingleBit] bit NULL,
[SingleTinyintBool] tinyint NULL,
[SingleTinyintEnum] tinyint NULL,
[SingleText] ntext COLLATE Chinese_PRC_CI_AS NULL,
[SingleBinary] image NULL,
CONSTRAINT [PK_Singles] PRIMARY KEY ([ID]) 
)
GO


ALTER TABLE [Children] ADD CONSTRAINT [FK_Children_Parents] FOREIGN KEY ([ParentID]) REFERENCES [Parents] ([GUID])
GO

