from django.contrib import admin

from .models import Actor, Movie, Review, User


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'release_date', 'avg_rating')
    fields = ('title', 'description', 'release_date', 'avg_rating', 'actors')


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ('name', 'bio', 'birth_date')
    fields = ('name', 'bio', 'birth_date')


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('score', 'movie', 'review', 'user')
    fields = ('score', 'movie', 'review', 'user')


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email')
    fields = ('username', 'password', 'email')
