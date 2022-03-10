export const fetchActivities = data => (
    $.ajax({
        method: "GET",
        url: "api/activities",
        data
    })
);

export const fetchActivity = id => (
    $.ajax({
        method: "GET",
        url: `api/activities/${id}`
    })
);

export const createActivity = activity => (
    $.ajax({
        method: "POST",
        url: `api/activities`,
        data: {activity}
    })
);

export const updateActivity = activity => (
    $.ajax({
        method: "PATCH",
        url: `api/activities/${activity.id}`,
        data: {activity}
    })
);

export const deleteActivity = id => (
    $.ajax({
        method: "DELETE",
        url: `api/activities/${id}`,
    })
);