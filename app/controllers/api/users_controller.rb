class Api::UsersController < ApplicationController

  before_action :ensure_logged_in, only: [:update]
  before_action :ensure_logged_out, only: [:create]

  def show 
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ['user not found'], status: 404
    end 
  end 

  def index 
    @users = User.all
  end 

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])

    if @user && @user.update(user_params)
      render :show
    elsif !@user
      render json: ['user not found'], status: 404
    else
      render json: @user.errors.full_messages, status: 422
    end 
  end 


  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :gender, :birthday, :location, :weight)
  end
end