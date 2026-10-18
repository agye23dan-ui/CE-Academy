# Machine Learning and AI: 14-Week Study Plan and Resources

Time budget: 9 to 12 hours per week (3 reading or lectures, 5 to 7 coding and problems, 1 review with the app's quizzes). Machine learning is learned by building: implement each algorithm once from scratch in NumPy, then use the library version (scikit-learn, PyTorch) and check they agree.

## Textbooks
- Aurélien Géron, *Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow* (practical first read).
- Christopher Bishop, *Pattern Recognition and Machine Learning* (probabilistic view; free PDF from the author).
- Hastie, Tibshirani and Friedman, *The Elements of Statistical Learning* (free PDF) and the lighter *An Introduction to Statistical Learning*.
- Goodfellow, Bengio and Courville, *Deep Learning* (free online); Zhang et al., *Dive into Deep Learning* (d2l.ai, runnable code).
- Murphy, *Probabilistic Machine Learning: An Introduction* (free draft online).
- Sutton and Barto, *Reinforcement Learning: An Introduction* (free online) for the RL chapters.

## Free courses
- Andrew Ng, *Machine Learning Specialization* (Coursera) and the Stanford CS229 notes.
- Stanford CS231n (convolutional networks), CS224n (language), CS229 lecture videos.
- fast.ai *Practical Deep Learning for Coders*; Andrej Karpathy's *Neural Networks: Zero to Hero* (build backprop and a transformer from scratch).
- 3Blue1Brown's neural network series; StatQuest (Josh Starmer) for intuition about every classical method.
- Kaggle Learn micro-courses and Kaggle competitions for practice on real datasets.

## Tools
Python 3, NumPy, pandas, Matplotlib, scikit-learn, PyTorch, Jupyter or Colab. Learn Git and a notebook-to-script workflow early.

## Week by week

**Week 1: Foundations and workflow.** Supervised, unsupervised and reinforcement learning; loss and risk; train/validation/test; cross-validation; data leakage. Lab: load a dataset with pandas, build a baseline, plot distributions.

**Week 2: Linear regression.** Normal equations, gradient descent, learning rate, feature scaling. Lab: implement both solvers in NumPy; reproduce the notes' worked example (b = 1.5, w = 0.8).

**Week 3: Bias, variance and regularization.** Polynomial features, ridge, lasso, cross-validated hyperparameters. Lab: reproduce the degree 1, 3, 9 experiment and plot validation curves.

**Week 4: Logistic regression and metrics.** Sigmoid, cross-entropy, softmax, confusion matrix, precision, recall, ROC and PR curves, thresholds. Lab: train on an imbalanced dataset and pick a threshold by cost.

**Week 5: k-NN, naive Bayes and decision trees.** Distance metrics, scaling, entropy and Gini, pruning. Lab: build a tree splitter from scratch and compare it with scikit-learn.

**Week 6: SVMs, kernels and ensembles.** Margin, soft margin, RBF kernel; bagging, random forests, boosting. Lab: compare random forest, gradient boosting and a linear model on a tabular dataset.

**Week 7: Midterm review and unsupervised learning.** k-means, choosing k, silhouette, hierarchical clustering, PCA via SVD. Lab: PCA on a face or digits dataset; cluster and visualize.

**Week 8: Neural networks I.** Neurons, MLPs, activations, forward pass, universal approximation. Lab: forward pass by hand and in NumPy; check shapes.

**Week 9: Neural networks II: backpropagation.** Chain rule on graphs, vanishing gradients, initialization. Lab: write backprop for a 2-layer net and verify with gradient checking and PyTorch autograd.

**Week 10: Optimization and regularization for deep learning.** SGD, momentum, Adam, schedules, batch normalization, dropout, weight decay, early stopping. Lab: compare optimizers on one problem; plot loss curves.

**Week 11: Convolutional networks.** Convolution arithmetic, pooling, ResNets, transfer learning, augmentation. Lab: train a small CNN on MNIST or CIFAR-10, then fine-tune a pretrained model.

**Week 12: Sequences, attention and transformers.** RNNs, LSTMs, attention, transformer blocks, language models, embeddings. Lab: implement scaled dot-product attention; follow Karpathy's mini-GPT.

**Week 13: Deployment, MLOps and responsible AI.** Quantization, pruning, ONNX/TFLite, monitoring and drift, fairness audits, model cards. Lab: export a model to ONNX, quantize it to int8, and measure size, latency and accuracy.

**Week 14: Revision and project.** Past exam questions, end-to-end project: data, baseline, tuned model, error analysis, report. Present the result with its limitations.

## Assessment pattern used in this course
Three assignments (regression, classification and classical models, neural networks and deployment), a class test, and a three-hour final. Practise by redoing every worked example in the notes first on paper and then in code.

## Study tips
- Always start with the simplest baseline and a clean validation scheme before trying a complex model.
- Plot everything: the data, the learning curves, the errors. Most bugs are visible in a plot.
- Keep a lab notebook: hypotheses, settings, seeds, results.
- Read one paper per week after Week 8 (ResNet, Adam, Batch Norm, Attention Is All You Need).
- Beware of leakage and of tuning on the test set; both give results that vanish in deployment.
