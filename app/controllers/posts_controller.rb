class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy like]


  def index
    @posts = Post.all
  end


  def show
    respond_to do |format|
      format.turbo_stream
      format.html
    end
  end


  def new
    @post = Post.new
  end


  def edit
  end


  def create
    @post = Post.new(post_params)
    respond_to do |format|
      if @post.save
        format.turbo_stream do
          render turbo_stream: turbo_stream.append("posts", partial: "posts/post", locals: { post: @post })
        end
        format.html { redirect_to @post, notice: "Post was successfully created." }
      else
        format.turbo_stream do
          render turbo_stream: turbo_stream.replace("new_post_form", partial: "posts/form", locals: { post: @post })
        end
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end


  def update
    if @post.update(post_params)
      respond_to do |format|
        format.turbo_stream { render turbo_stream: turbo_stream.replace(@post, partial: "posts/post", locals: { post: @post }) }
        format.html { redirect_to @post, notice: "Post was successfully updated." }
        format.json { render :show, status: :ok, location: @post }
      end
    else
      respond_to do |format|
        format.turbo_stream { render turbo_stream: turbo_stream.replace(@post, partial: "posts/form", locals: { post: @post }) }
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end


  def like
    if @post
      @post.increment_likes!

      respond_to do |format|
        format.html { redirect_to @post, notice: "You liked this post!" }
        format.json { render json: { likes: @post.likes }, status: :ok }
      end
    else
      respond_to do |format|
        format.html { redirect_to posts_path, alert: "Post not found." }
        format.json { render json: { error: "Post not found" }, status: :not_found }
      end
    end
  end


  def destroy
    @post.destroy!
    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@post) }
      format.html { redirect_to posts_path, status: :see_other, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end



  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end
end
