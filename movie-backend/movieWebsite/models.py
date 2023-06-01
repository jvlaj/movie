from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, validate_email


class User(models.Model):
    """
    Model representing a user.
    """
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField(validators=[validate_email])

    def __str__(self):
        return f"{self.user} - {self.score}"


class Actor(models.Model):
    """
    Model representing Actor who worked on a movies(s).
    """

    name = models.CharField(max_length=200)
    bio = models.TextField(help_text="Enter a brief description of the actor.")
    birth_date = models.DateField(help_text="Enter the year the actor was born.")

    def __str__(self):
        return f"Actor: {self.name}"


class Movie(models.Model):
    """
    Model representing a movies.
    """
    title = models.CharField(max_length=200, help_text="Enter the movies title.")
    description = models.TextField(help_text="Enter a brief description of the movies.")
    release_date = models.DateField(help_text="Enter the year the movies was released.")
    avg_rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],
                                     help_text="The average rating of the movies.")
    actors = models.ManyToManyField(Actor, related_name='movies', blank=True, help_text="The actors in the movies.")


class Review(models.Model):
    """
    Model representing a score given by a user to a movies.
    """
    score = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)],
                                help_text="The user's rating of this movies.")
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    review = models.TextField(help_text="Enter a brief description of the review.")
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='%(class)s',
        verbose_name='user',
        help_text='The user that will be associated with the model instance',
        db_index=True
    )
