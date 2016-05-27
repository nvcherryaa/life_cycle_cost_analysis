class Api::V1::DepartmentsController < ApplicationController

  include ActionView::Helpers::SanitizeHelper
  protect_from_forgery

  def index
    render json: Department.all
  end

  def create
    payload = {}

    begin
      @department = Department.create(name: params[:name], code: params[:code], password: params[:password])
      payload[:errors] = 0
      payload[:data] = @department
    rescue Exception => e
      payload[:errors] = 1
      payload[:message] = e.message
    end

    render json: payload
  end

end
