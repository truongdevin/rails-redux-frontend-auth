class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render json: user
    else
      # must send status code 200 for the frontend to get the error...
      # render json: { errors: "Invalid Credentials" }, status: 422
      render json: { errors: "Invalid Credentials", status: 422 }, status: 200
    end
  end

  def destroy
    sign_out
    render json: ['signing out'], status: 200
  end

  def fetch_session
    render json: current_user
  end
end
