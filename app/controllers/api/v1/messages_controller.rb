class Api::V1::MessagesController < ApplicationController
  def index
    @channel = Channel.find_by(name: params[:channel_id])
    @messages = @channel.messages
  end

end
