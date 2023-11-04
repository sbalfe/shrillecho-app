import graphene
import spotipy
import redis

# from shrillecho.playlist.playlist_engine import PlaylistEngine
# from shrillecho.types.playlists import Playlist
import schemas.graphene_schema as gtype

class Playlist:
    pass

class Query(graphene.ObjectType):
    playlist = graphene.Field(gtype.Playlist)
    def resolve_playlist(self, info) -> Playlist:
        pass
        # r: redis.Redis = info.context["redis"]
        # # sp: spotipy.Spotify= get_spotify_client(info.context["request"])
        # sp:spotipy.Spotify = spotipy.Spotify(auth='')
        # playlist_engine = PlaylistEngine(sp)
        # return playlist_engine.load_playlist(PlaylistEngine.parse_id_from_url('https://open.spotify.com/playlist/4HXmYb7GVQkvYynh0RenQz?si=e1f2a3984cee4068'))