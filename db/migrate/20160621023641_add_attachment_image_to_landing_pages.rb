class AddAttachmentImageToLandingPages < ActiveRecord::Migration
  def self.up
    change_table :landing_pages do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :landing_pages, :image
  end
end
