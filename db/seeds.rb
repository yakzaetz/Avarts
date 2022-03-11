# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.create({name: 'Eric', email: 'eric@avarts.com', password: '123123', gender: 'M', birthday:'1990-11-01', location: 'nyc', weight: 165 })
user_1 = User.create({name: 'Sassy Pochello', email: 'sass@avarts.com', password: '123123', gender: 'F', birthday:'2000-10-05', location: 'sd', weight: 210 })
user_2 = User.create({name: 'Ricky Deetz', email: 'deetz22@avarts.com', password: '123123', gender: 'F', birthday:'2004-03-04', location: 'sf', weight: 195 })
user_3 = User.create({name: 'Squash Banana', email: 'Raficky@avarts.com', password: '123123', gender: 'M', birthday:'1992-08-21', location: 'Eugene', weight: 177 })
user_4 = User.create({name: 'Marco Polo', email: 'mojointhemornig@avarts.com', password: '123123', gender: 'M', birthday:'1994-06-02', location: 'Monroe', weight: 142 })

Activity.destroy_all

activity_1 = Activity.create({ activity_type: "Run",date: '2022-02-03' ,hours: 1,minutes: 11,seconds: 11,distance: 5,title: "Pretty good",description: "Met Mike",time: Time.new ,user_id: user_1.id })
activity_2 = Activity.create({ activity_type: "Bike",date: '2019-03-31' ,hours: 2,minutes: 2,seconds: 18,distance: 7,title: "FUNNN",description: "Prospect Park Loops",time: Time.new ,user_id: user_2.id })
activity_3 = Activity.create({ activity_type: "Walk",date: '2022-12-23' ,hours: 3,minutes: 11,seconds: 11,distance: 4,title: "Stronger Together",description: "Went with Joel",time: Time.new ,user_id: user_3.id })
activity_4 = Activity.create({ activity_type: "Run",date: '2022-01-13' ,hours: 2,minutes: 2,seconds: 18,distance: 7,title: "Pretty good",description: "Really dificult",time: Time.new ,user_id: user_4.id })
activity_5 = Activity.create({ activity_type: "Walk",date: '2022-09-17' ,hours: 1,minutes: 11,seconds: 11,distance: 5,title: "Nice",description: "Corn Beef",time: Time.new ,user_id: demo_user.id })
activity_6 = Activity.create({ activity_type: "Run",date: '2022-02-03' ,hours: 1,minutes: 11,seconds: 11,distance: 5,title: "Nice and easy",description: "Pastrami",time: Time.new ,user_id: user_1.id })
activity_7 = Activity.create({ activity_type: "Bike",date: '2019-03-31' ,hours: 2,minutes: 2,seconds: 18,distance: 7,title: "Aced it",description: "Getting rid of the cholent",time: Time.new ,user_id: user_2.id })
activity_8 = Activity.create({ activity_type: "Walk",date: '2022-12-23' ,hours: 3,minutes: 11,seconds: 11,distance: 4,title: "electric",description: "Running with the President",time: Time.new ,user_id: user_3.id })
activity_9 = Activity.create({ activity_type: "Run",date: '2022-01-13' ,hours: 2,minutes: 2,seconds: 18,distance: 7,title: "Nice to see Marco Polo",description: "Really easy",time: Time.new ,user_id: user_4.id })
activity_10 = Activity.create({ activity_type: "Ride",date: '2021-09-27' ,hours: 2,minutes: 11,seconds: 16,distance: 5,title: "Hahaha",description: "Corn Beef again",time: Time.new ,user_id: demo_user.id })
activity_11 = Activity.create({ activity_type: "Walk",date: '2022-09-18' ,hours: 3,minutes: 31,seconds: 41,distance: 15,title: "that taxi",description: "So much Corn Beef",time: Time.new ,user_id: demo_user.id })
activity_12 = Activity.create({ activity_type: "Ride",date: '2022-09-28' ,hours: 1,minutes: 45,seconds: 17,distance: 75,title: "Heavy Pizza",description: "Where did he come from",time: Time.new ,user_id: demo_user.id })
activity_13 = Activity.create({ activity_type: "Walk",date: '2018-11-07' ,hours: 4,minutes: 55,seconds: 21,distance: 55,title: "New Shoes",description: "Where did he go",time: Time.new ,user_id: demo_user.id })
activity_14 = Activity.create({ activity_type: "Run",date: '2018-12-17' ,hours: 1,minutes: 34,seconds: 45,distance: 53,title: "Working through problems",description: "Cotton eyed Joe",time: Time.new ,user_id: demo_user.id })
activity_15 = Activity.create({ activity_type: "Walk",date: '2020-06-16' ,hours: 3,minutes: 21,seconds: 22,distance: 22,title: "Such a blast",description: "Awesome time",time: Time.new ,user_id: demo_user.id })
activity_16 = Activity.create({ activity_type: "Walk",date: '2022-07-15' ,hours: 2,minutes: 26,seconds: 55,distance: 51,title: "Boring",description: "Corn Beef again",time: Time.new ,user_id: demo_user.id })
activity_17 = Activity.create({ activity_type: "Run",date: '2022-08-17' ,hours: 1,minutes: 19,seconds: 22,distance: 45,title: "Funy you ask",description: "Oh Cholent",time: Time.new ,user_id: demo_user.id })
activity_18 = Activity.create({ activity_type: "Run",date: '2022-10-17' ,hours: 3,minutes: 41,seconds: 42,distance: 25,title: "Got this",description: "Burning the calories",time: Time.new ,user_id: demo_user.id })