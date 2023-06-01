from rest_framework import serializers

from .models import Movie, Actor


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ['id', 'name', 'birth_date', 'bio']


class MovieDetailSerializer(serializers.ModelSerializer):
    actors = ActorSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'

    def get_actors(self, obj):
        actors = obj.actors.all()
        actor_serializer = ActorSerializer(actors, many=True)
        return actor_serializer.data


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        exclude = ['actors']
