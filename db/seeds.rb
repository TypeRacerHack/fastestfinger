# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = 12.times do |i|
  user = User.create(
    email: "prueba#{i}@dispostable.com",
    password: "password",
  )
  10.times do 
  Score.create(
  	user: user,
  	highscore: Faker::Number.number(2),
  	)
  end
end