json.array! @messages do |message|
  json.id message.id
  json.author message.user.name
  json.content message.content
  json.created_at message.created_at
end
