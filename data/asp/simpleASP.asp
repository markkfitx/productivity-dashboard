<%
Response.ContentType = "application/json"

Dim id
id = Request.QueryString("id")

Dim json
json = "{""id"":""" & id & """,""name"":""Test User"",""status"":""active""}"

Response.Write json
%>