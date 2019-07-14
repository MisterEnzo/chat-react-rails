class ChannelsController < ApplicationController
  def show
    if params[:id].blank?
      redirect_to channel_path(Channel.first.name)
    elsif Channel.find_by(name: params[:id]).nil?
      redirect_to channel_path(Channel.first.name)
    else
      @channel = Channel.find_by(name: params[:id])
      @channels = Channel.all
    end
  end
end
