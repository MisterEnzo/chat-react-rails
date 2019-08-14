# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
User.destroy_all
Channel.destroy_all

puts "Creating channels..."
Channel.create(name: "general")
Channel.create(name: "paris")
Channel.create(name: "react")

puts "Creating users and messages..."
3.times do |num|
  User.create(name: "User#{num}", email: "User#{num}@test.com", password: 123123)
  User.find_by(name: "User#{num}").messages.create(content: "Hello world!", channel_id: num)
end

puts "done seeding."
