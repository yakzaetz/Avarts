json.activities do 
    @activities.each do |activity|
        json.set! activity.id do 
            json.partial! "api/activities/activity", activity: activity
        end 
    end 
end 

json.users do
    @activities.each do |activity|
        json.set! activity.user_id do 
            json.partial! "api/users/user", user: activity.user
        end 
    end
end