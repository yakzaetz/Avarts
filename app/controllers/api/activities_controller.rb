class Api::ActivitiesController < ApplicationController

    def show
        @activity = Activity.find(params[:id])
        if @activity
            render :show
        else
            render json: ['activity not found'], status: 404
        end
    end 

    def index
      @activities = ""; 
      if currentId
          @activities = Activity.all.where(user_id: currentId).sort_by{|a| a.date.to_datetime }
      else 
        @activities = Activity.all.sort_by{|a| a.date.to_datetime }
      end
    end 

    def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def update 
    @activity = Activity.find(params[:id])

    if @activity && @activity.update(activity_params)
      render :show
    elsif !@activity
      render json: ['activity not found'], status: 404
    else
      render json: @activity.errors.full_messages, status: 422
    end 
  end

  def delete 
    @activity = Activity.find(params[:id])

    if @activity
      @activity.delete
      render :index
    else
      render json: ['activity not found'], status: 404
    end
  end

  private

  def user_params
    params.require(:activity).permit(:activity_type, :date, :hours, :minutes, :seconds, :distance, :title, :description, :time, :user_id)
  end

  def currentId 
    params[:currentId]
  end 

end 