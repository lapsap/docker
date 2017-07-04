FROM la_ubuntu
RUN apt-get clean 
EXPOSE 80 
CMD ["apache2ctl", "-D", "FOREGROUND"]
