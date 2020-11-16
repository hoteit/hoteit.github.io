---
title:  Financial Sentiment Analysis
date:   2016-11-17 09:14
categories: notes 
tags: [phd]
---

As part of my Phd dissertation at Walden University, I developed an application that would analyze the sentiments of tweets that include the stock symbols of the publicly held firms in the United States and correlate the results with the financial data of such firms during the period of the research.
At the time of the coding, between 4th quarter of 2014 and the first quarter of 2015, I could not find ready made tools that I could use for conducting the data analysis. Some companies offered solutions at very high costs while other tools had limited capabilities. So I went ahead and stitched various tools and coding techniques for my own research. The key steps and scripting tools used were as follows:

- Used Twitter APIs and Tweepy libraries in my Python code that would extract the relevant tweets on a streaming-basis from Twitter
- Leveraged Yahoo Developer Network using my Python code to extract the financial data of each of the publicly held firms in the United States.
- Extracted the stock symbols of all publicly held companies in the United States by extracting the data from nasdaq.com using IPython Pandas libraries
- Developed a portal using Python Django that would help me train the machine learning system to recognize negative and positive sentiments.
- Used Stanford Core NLP java modules with the help of the trained data to analyze the sentiments of all the tweets
- Used IPython Pandas in a Notebook format to conduct the data analysis.

The source code is available on [finSentiment on Github](https://github.com/hoteit/finSentiment).

##### [Stanford Core NLP](http://stanfordnlp.github.io/CoreNLP/)

Stanford Core NLP includes a set of libraries for natural language analysis. This includes part of speech tagger (POS), 
named entity recognizer (NER), a statistical parser, a coreference detection system, sentiment analyzer, pattern-based
extractor system, and other tools. Stanford Core NLP is licensed under 
[GNU General Public License](http://www.gnu.org/licenses/gpl-2.0.html). Stanford NLP Group offers a number of different
software that you can check at [Stanford Core NLP Software](http://nlp.stanford.edu/software)

I personally used [Stanford Core NLP sentiment analysis](http://nlp.stanford.edu/sentiment/) in my dissertation.
The original code runs in Java and requires a training dataset. You could use
[Stanford Sentiment Treebank](http://nlp.stanford.edu/sentiment/treebank.html) or you could allow the framework to run
on a treebank that you can develop as the training dataset model that you require for a specific research domain.
To illustrate Stanford sentiment analyzer, check
[Stanford Core NLP Live Demo](http://nlp.stanford.edu:8080/sentiment/rntnDemo.html). Source code instructions
instructions on how to retrain the model using your own database is available on 
[Stanford Core NLP Sentiment Analysis code](http://nlp.stanford.edu/sentiment/code.html). To run the Stanford already
trained model on movie reviews,

     java -cp "*" -mx5g edu.stanford.nlp.sentiment.SentimentPipeline -file foo.txt  //foo.txt is some text file)
     java -cp "*" -mx5g edu.stanford.nlp.sentiment.SentimentPipeline -stdin  //as command line input)

Training Stanford CoreNLP Sentiment Analysis model requires a [Penn Tree Bank (PTB)](https://www.cis.upenn.edu/~treebank/) dataset

    java -mx8g edu.stanford.nlp.sentiment.SentimentTraining -numHid 25 -trainPath train.txt -devPath dev.txt -train -model model.ser.gz

`'dev.text', 'train.txt', and preferable 'dev.txt' would be your standard subset of data from your dataset for better supervised training techniques. However, such text should be in PTB format, such as

    (4 (4 (2 A) (4 (3 (3 warm) (2 ,)) (3 funny))) (3 (2 ,) (3 (4 (4 engaging) (2 film)) (2 .))))

where the numbers represent the annotations for each word in the document. Stanford Core NLP Java class [PTBTokenizer](http://nlp.stanford.edu/nlp/javadoc/javanlp/edu/stanford/nlp/process/PTBTokenizer.html)
can help you with tokenizing the text.

Training the model with your dataset takes good amount of time. I highly recommended not to run the model training on
a cloud vm instance. Instead, run it on a local machine. Training the model would result in **model.ser.gz**  that will used to perform sentiment analysis on new untrained text.

    java -mx8g edu.stanford.nlp.sentiment.SentimentTraining -numHid 25 -trainPath train.txt -devPath dev.txt -train -model model.ser.gz

In my application, I ran the model training on a local machine and then used Python to execute in Java `edu.stanford.nlp.sentiment.SentimentPipeline`
via a command pipeline for each input that i had previously captured using a different Python algorithm and stored into my MySql/Django database.
I will not go in details about the results of my implementation. I will leave it to another blog post.

Stanford CoreNLP is really cool. You will really gain a lot of insights on natural language processing by leveraging such model.
