from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer, MovieDetailSerializer
from django.http import HttpRequest
import requests


class MoviePagination(PageNumberPagination):
    """
    Number of movies to display per page
    """
    page_size = 10


class MovieDetailCreateView(RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieDetailSerializer


class MovieListCreateView(ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class TMDB(APIView):

    import environ
    env = environ.Env()
    api_key = env("MOVIE_APIKEY")


class MovieDiscover(TMDB):

    def getMovieImages(self, id, pk=None):
        url = "https://api.themoviedb.org/3/movie/" + pk + "/images"
        url = url + "&api_key=" + self.api_key
        url = f'{url}&api_key={self.api_key}'
        res = requests.get(url)

    def get(self, request):
        url = "https://api.themoviedb.org/3/discover/movie?include_adult=false?paginate=10&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
        url = f'{url}&api_key={self.api_key}&paginate={MoviePagination.page_size}'
        res = requests.get(url)

        # Assuming you want JSON, we should check if the request was successful
        if res.status_code == 200:
            print(res.json())
            return Response(res.json())
        else:
            return Response({"error": "API request unsuccessful"}, status=res.status_code)
