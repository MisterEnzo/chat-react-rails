class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user
  belongs_to :channel

  after_create :broadcast_message

  # this is how the messages will be sent by action cable

  def as_json(options ={})
    {
      id: id,
      author: self.user.name,
      content: content,
      created_at: time_ago_in_words(self.created_at),
      channel: self.channel.name
    }
  end

  private

  def broadcast_message
    ActionCable.server.broadcast("channel_#{channel.name}", self)
  end
end
