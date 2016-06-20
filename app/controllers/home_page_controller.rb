class HomePageController < ApplicationController

  def index
  end

  def show
  	@home_page = Home_page.find(params[:id])
  end

	private
	 def home_page_params
	 	home_page.require(:home_page).permit()
	 end

	 def home_page
	 	@home_page = home_pages.find(params[:id])
	 end
end
