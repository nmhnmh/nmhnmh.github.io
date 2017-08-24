```sql
SELECT pop, repo_name, path
FROM (
  # find all files used by maven in all repos
  SELECT id, repo_name, path
  FROM `bigquery-public-data.github_repos.files` AS files
  WHERE path LIKE '%pom.xml' AND
    EXISTS (
      # file content: non-binary, contains 'commons-collectoins' and '3.2.1' 
      SELECT 1
      FROM `bigquery-public-data.github_repos.contents`
      WHERE NOT binary AND
        content LIKE '%commons-collections<%' AND
        content LIKE '%>3.2.1<%' AND
        id = files.id
    )
)
JOIN 
(
  # find repos with a specific commit/diff
  SELECT
    difference.new_sha1 AS id,
    ARRAY_LENGTH(repo_name) AS pop
  FROM `bigquery-public-data.github_repos.commits`
  CROSS JOIN UNNEST(difference) AS difference
)
# join with commit id
USING (id)
# order by popularity desc
ORDER BY pop DESC;
```
