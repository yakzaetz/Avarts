class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception 
  # protect_from_forgery with: :exception, prepend: true
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def ensure_logged_in
    redirect_to root_url unless logged_in?
  end 

  def ensure_logged_out
    redirect_to root_url if logged_in?
  end 
end
