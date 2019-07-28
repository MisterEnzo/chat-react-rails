class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  after_create :broadcast_message

  private

  def broadcast_message
    ActionCable.server.broadcast("channel_#{channel.name}", self)
  end
end
