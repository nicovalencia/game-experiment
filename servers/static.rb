require 'goliath'

## HTTP server
class RackRoutes < Goliath::API

  use Rack::Static,
    :urls => ["/app", "/assets"],
    :root => "../public"

  def response(env)
    [
      200, 
      {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
      File.open('../index.html', File::RDONLY)
    ]
  end

end

