json.activity do 
    json.partial! "api/activities/activity", activity: @activity
end

json.user do 
    json.partial! "api/users/user", user: @activity.user
end 