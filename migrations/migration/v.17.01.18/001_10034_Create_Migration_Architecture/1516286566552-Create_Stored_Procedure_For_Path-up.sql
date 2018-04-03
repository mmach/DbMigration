
CREATE PROCEDURE [dbo].[Patch_Init]
	@p_release BIGINT,
	@p_description BIGINT,
    @p_createdBy nvarchar(100),
	@p_issue_id BIGINT,
	@p_title nvarchar(100)

AS
   DECLARE @p_patch_id int=0;
   
   BEGIN TRANSACTION A;

		INSERT INTO [PatchTable](
			  [Release]
			  ,[Description]
			  ,[FinishDate]
			  ,[CreatedBy]
			  ,[IssueId]
			  ,[Title])
		 Values(@p_release,@p_description,NULL,@p_createdBy,@p_issue_id ,@p_title)
		
		SET @p_patch_id = CAST(@@IDENTITY AS INT);

	COMMIT TRANSACTION A;
RETURN @p_patch_id;



