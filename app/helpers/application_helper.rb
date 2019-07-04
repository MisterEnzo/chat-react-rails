module ApplicationHelper
  def login_helper
    if !current_user
      (link_to "Sign-up", new_user_registration_path, class: "item") + " ".html_safe +
      (link_to "Login", new_user_session_path, class: "item")
    else
      (link_to "Logout", destroy_user_session_path, method: :delete, class: "item" )
    end
  end
end
