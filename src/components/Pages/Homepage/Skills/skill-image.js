import adobeXd from './svg/adobe-xd.svg';
import adobeaudition from './svg/adobeaudition.svg';
import afterEffects from './svg/after-effects.svg';
import angular from './svg/angular.svg';
import aws from './svg/aws.svg';
import azure from './svg/azure.svg';
import blender from './svg/blender.svg';
import bootstrap from './svg/bootstrap.svg';
import bulma from './svg/bulma.svg';
import c from './svg/c.svg';
import canva from './svg/canva.svg';
import capacitorjs from './svg/capacitorjs.svg';
import coffeescript from './svg/coffeescript.svg';
import cplusplus from './svg/cplusplus.svg';
import csharp from './svg/csharp.svg';
import css from './svg/css.svg';
import dart from './svg/dart.svg';
import deno from './svg/deno.svg';
import django from './svg/django.svg';
import docker from './svg/docker.svg';
import fastify from './svg/fastify.svg';
import figma from './svg/figma.svg';
import firebase from './svg/firebase.svg';
import flutter from './svg/flutter.svg';
import gcp from './svg/gcp.svg';
import gimp from './svg/gimp.svg';
import git from './svg/git.svg';
import go from './svg/go.svg';
import graphql from './svg/graphql.svg';
import haxe from './svg/haxe.svg';
import html from './svg/html.svg';
import illustrator from './svg/illustrator.svg';
import ionic from './svg/ionic.svg';
import java from './svg/java.svg';
import javascript from './svg/javascript.svg';
import julia from './svg/julia.svg';
import kotlin from './svg/kotlin.svg';
import lightroom from './svg/lightroom.svg';
import markdown from './svg/markdown.svg';
import materialui from './svg/materialui.svg';
import matlab from './svg/matlab.svg';
import memsql from './svg/memsql.svg';
import microsoftoffice from './svg/microsoftoffice.svg';
import mongoDB from './svg/mongoDB.svg';
import mysql from './svg/mysql.svg';
import nextJS from './svg/nextJS.svg';
import nginx from './svg/nginx.svg';
import numpy from './svg/numpy.svg';
import nuxtJS from './svg/nuxtJS.svg';
import opencv from './svg/opencv.svg';
import photoshop from './svg/photoshop.svg';
import php from './svg/php.svg';
import picsart from './svg/picsart.svg';
import postgresql from './svg/postgresql.svg';
import premierepro from './svg/premierepro.svg';
import python from './svg/python.svg';
import pytorch from './svg/pytorch.svg';
import react from './svg/react.svg';
import ruby from './svg/ruby.svg';
import selenium from './svg/selenium.svg';
import sketch from './svg/sketch.svg';
import strapi from './svg/strapi.svg';
import svelte from './svg/svelte.svg';
import swift from './svg/swift.svg';
import tailwind from './svg/tailwind.svg';
import tensorflow from './svg/tensorflow.svg';
import typescript from './svg/typescript.svg';
import unity from './svg/unity.svg';
import vitejs from './svg/vitejs.svg';
import vue from './svg/vue.svg';
import vuetifyjs from './svg/vuetifyjs.svg';
import webix from './svg/webix.svg';
import wolframalpha from './svg/wolframalpha.svg';
import wordpress from './svg/wordpress.svg';

import pandas from './svg/pandas.svg';
import scikitlearn from './svg/scikit-learn.svg';
import dotnet from './svg/dotnet.svg';
import dotnetcore from './svg/dotnetcore.svg';
import kubernetes from './svg/kubernetes.svg';
import linux from './svg/linux.svg';
import sqlalchemy from './svg/sqlalchemy.svg';
import fastapi from './svg/fastapi.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      return '/placeholder.svg'; // Add a default return value
  }
};

export default skillsImage;