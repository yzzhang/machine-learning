# Selected Machine Learning Projects

## 1. Statistical Learning

### 1.1 Feature Selection

#### [Titanic Survival Exploration](https://github.com/yzzhang/machine-learning/tree/master/statistical_learning/feature_selection)
In 1912, the ship RMS Titanic struck an iceberg on its maiden voyage and sank, resulting in the deaths of most of its passengers and crew. This introductory project explores a subset of the RMS Titanic passenger manifest to determine which features best predict whether someone survived or did not survive. 

### 1.2 Supervised Learning

#### Decision Tree 
The [Boston Housing](https://github.com/yzzhang/machine-learning/tree/master/statistical_learning/Supervised_Learning/Decision_Tree/boston_housing)
project evaluates the performance and predictive power of a <b>Decision Tree</b> model that has been trained and tested on data collected from homes in suburbs of Boston, Massachusetts. A model trained on this data that is seen as a good fit could then be used to make certain predictions about a home — in particular, its monetary value. This model would prove to be invaluable for someone like a real estate agent who could make use of such information on a daily basis.

#### Decision Tree, Random Forest, GBM with Grid Search 
In the [Finding Donors Using Grid Search for the Best Model](https://github.com/yzzhang/machine-learning/tree/master/statistical_learning/Supervised_Learning/Tree_Based_Grid_Search/finding_donors) project, first several supervised algorithms (<b>Decision Tree</b>, <b>Random Forest</b>, <b>GBM</b>) are employed to accurately model individuals' income using data collected from the 1994 U.S. Census. Then the best candidate algorithm is chosen from preliminary results and further optimized to best model the data. The goal with this implementation is to construct a model that accurately predicts whether an individual makes more than $50,000. This sort of task can arise in a non-profit setting, where organizations survive on donations. Understanding an individual's income can help a non-profit better understand how large of a donation to request, or whether or not they should reach out to begin with. While it can be difficult to determine an individual's general income bracket directly from public sources, we can (as we will see) infer this value from other publically available features.

#### Random Forest
[The Kaggle Interview Attendance Problem](https://github.com/yzzhang/machine-learning/tree/master/statistical_learning/Supervised_Learning/Random_Forest/interview_attendance_problem)
project demonstrates a solution to [The Interview Attendance Problem in Kaggle](https://www.kaggle.com/vishnusraghavan/the-interview-attendance-problem/):
* Create a Random Forest model to predict if a candidate will attend an interview. This is indicated by the "Observed Attendance" column in the data set. Create the model only using the records where this column is not null.
* Provide a probability and a prediction for the candidates where the "Observed Attendance" column is null.

#### Logistic Regression
The Capital One proprietary <font color="blue">Duplicate Management</font> project proposes and implements a new Open Source method to a duplicate management problem in Capital One using [Dedupe.IO](https://dedupe.io/). The L2 regularized logistic regression is used as default model for predicting duplicates. This method was presented in The Customer One 2019 Hackathon, Capital One, June 7, 2019.

### 1.3 Unsupervised Learning

#### PCA and K-Means
The [Customer Segments Using PCA and K-Means](https://github.com/yzzhang/machine-learning/tree/master/statistical_learning/Unsupervised_Learning/customer_segments)
project analyzes a dataset containing data on various customers' annual spending amounts (reported in monetary units) of diverse product categories for internal structure. One goal of this project is to best describe the variation in the different types of customers that a wholesale distributor interacts with. Doing so would equip the distributor with insight into how to best structure their delivery service to meet the needs of each customer.

## 2. Deep Learning

#### 2.1 Multi-Layer Perceptron

The [Research Project on Using Deep Neural Network for Breast Cancer Diagnosis](https://github.com/yzzhang/machine-learning/tree/master/deep_learning/Multi_Layer_Perceptron/capstone) proposes and implements a new deep learning method for analyzing the same WDBC dataset for breast cancer diagnosis first and then presents a brand new research paper entitled "Wisconsin Breast Cancer Diagnosis Deep Learning Revisited".  

<b> Abstract </b>

The machine learning methodology has long been used in medical diagnosis. The Wisconsin Diagnostic Breast Cancer (WDBC) dataset has been widely used in research experiments.
Most of publications focused on traditional machine learning methods such as decision trees and decision tree-based ensemble methods.
Recently supervised deep learning method starts to get attention. For instance, Stahl and Geekette applied this method to the WDBC dataset for breast cancer diagnosis using feature values calculated from digitized image of a Fine Needle Aspirate (FNA) of a breast mass.
In this paper, I propose a new supervised deep learning method for analyzing the same WDBC dataset for breast cancer diagnosis. Experimental results demonstrate that the performance of the new deep learning network is robust and outperforms the performance results reported by both Stahl and Geekette.

#### 2.2 Convolutional Neural Networks

The [Dog Identification App](https://github.com/yzzhang/machine-learning/tree/master/deep_learning/Convolutional_Neural_Networks/dog-project) project makes the first steps towards developing an algorithm that could be used as part of a mobile or web app. The app accepts any user-supplied image as input. If a dog is detected in the image, it will provide an estimate of the dog's breed. If a human is detected, it will provide an estimate of the dog breed that is most resembling. 

The Capital One proprietary <font color="blue">Deep Customer Matching</font> project explores an innovative method for probabilistic customer matching with face recognition using convolutional neural networks. A patent proposal has been submitted in Capital One, March 15, 2019.


#### 2.3 Reinforcement Learning

The [Smart Cab Using Reinforcement Leaning](https://github.com/yzzhang/machine-learning/tree/master/deep_learning/Reinforcement_Learning/smartcab) project works towards constructing an optimized Q-Learning driving agent that will navigate a Smartcab through its environment towards a goal. Since the Smartcab is expected to drive passengers from one location to another, the driving agent will be evaluated on two very important metrics: Safety and Reliability. A driving agent that gets the Smartcab to its destination while running red lights or narrowly avoiding accidents would be considered unsafe. Similarly, a driving agent that frequently fails to reach the destination in time would be considered unreliable. Maximizing the driving agent's safety and reliability would ensure that Smartcabs have a permanent place in the transportation industry.

## Certificates

* [Udacity Machine Learning Engineer Nanodegree](https://github.com/yzzhang/machine-learning/blob/master/certificates/Yuefeng_certificate_11_28_2017.pdf)
* [AWS Certified Solutions Architect - Associate](https://github.com/yzzhang/machine-learning/blob/master/certificates/AWS_Certified_Solutions_Architect_Associate_certificate.pdf)
* [AWS Certified Developer - Associate](https://github.com/yzzhang/machine-learning/blob/master/certificates/AWS_Certified_Developer_Associate_Certificate.pdf)