from django.db import models

# Create your models here.
class Todo(models.Model):
        title = models.CharField("Title", max_length=200)
        description = models.TextField("Description")
        completed = models.BooleanField("Completed", default=False)

        def _str_(self):
            return self.title
