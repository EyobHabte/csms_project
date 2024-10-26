# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('ADMIN', 'Admin'),
        ('MANAGER', 'General Manager'),
        ('FINANCE', 'Finance Officer'),
        ('MEMBER', 'Member'),
    ]
    
    role = models.CharField(max_length=50, blank=True, null=True)  
    account_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    # Additional fields as required

    def __str__(self):
        return self.username
