class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  after_create :broadcast_message

  def as_json(options ={})
    {
      id: id,
      author: self.user.name,
      content: content,
      created_at: created_at,
      channel: self.channel.name
    }
  end

  private

  def broadcast_message
    ActionCable.server.broadcast("channel_#{channel.name}", self)
  end
end
