# Machine Learning and AI: Complete Lecture Notes

Prerequisites: linear algebra, multivariable calculus (gradients), probability and statistics, and Python with NumPy. Every worked number in these notes was computed with NumPy, scikit-learn or PyTorch. Re-derive each example by hand once, then reproduce it in code.

## Chapter 1. What Machine Learning Is

### 1.1 The learning problem
A model is a function f_θ that maps an input x to a prediction ŷ. **Learning** means choosing the parameters θ so that the predictions are good on data the model has not seen. We are given a training set of N examples. The standard setting splits into three families:
- **Supervised learning**: each example has a label y. *Regression* predicts a number, *classification* predicts a class.
- **Unsupervised learning**: no labels; find structure (clustering, dimensionality reduction, density estimation).
- **Reinforcement learning**: an agent acts in an environment and learns from rewards.

### 1.2 Loss, risk and generalization
A **loss function** L(ŷ, y) scores one prediction. The **empirical risk** is the average loss on the training set, and training minimizes it. What we actually care about is the **expected risk** on new data from the same distribution. The gap between the two is the **generalization gap**. A model with tiny training loss and large test loss has **overfit**; a model with large loss on both has **underfit**.

### 1.3 Data splits
- **Training set**: used to fit parameters.
- **Validation set**: used to choose hyperparameters (model size, learning rate, regularization strength).
- **Test set**: used once, at the end, to report performance. If you tune on the test set it stops being an honest estimate.

Typical splits are 60/20/20 or 70/15/15. With small data use **k-fold cross-validation**: split the data into k parts, train on k - 1, validate on the remaining part, rotate, and average. For n = 100 and k = 5, each fold trains on 80 examples and validates on 20.

**Data leakage** is the most common reason a model looks excellent in the notebook and fails in production. Fit scalers, imputers and feature selectors on the training data only; for time series always split by time, never randomly.

### 1.4 The machine learning workflow
1. Define the problem and the metric the business or system cares about.
2. Collect and inspect the data; look for missing values, outliers, label noise and class imbalance.
3. Build a trivial baseline (predict the mean, or the majority class). Any model must beat it.
4. Engineer features, train models, tune on validation data.
5. Evaluate once on the test set, analyse errors, then deploy and monitor.

## Chapter 2. Linear Regression

### 2.1 Model and least squares
The model is ŷ = w·x + b. Stack the examples into a design matrix X (with a column of ones for the intercept) and minimize the mean squared error J(w) = (1/N) ||Xw - y||². Setting the gradient to zero gives the **normal equations**:

```
(Xᵀ X) w = Xᵀ y
```

**Worked example.** Data (x, y) = (1, 2), (2, 3), (3, 5), (4, 4). Then XᵀX = [[4, 10], [10, 30]] and Xᵀy = [14, 39]. Solving gives intercept b = 1.5 and slope w = 0.8. The residuals are -0.3, -0.1, 1.1, -0.7, giving MSE = 0.45 and R² = 1 - SS_res/SS_tot = 0.64.

### 2.2 Gradient descent
For large problems we iterate: w ← w - η ∇J(w), where ∇J = (2/N) Xᵀ(Xw - y) and η is the **learning rate**.

**Worked example (same data, η = 0.1, start at b = w = 0).** The first gradient is [-7, -19.5], giving (b, w) = (0.7, 1.95). The second gradient is [4.15, 13.25], giving (0.285, 0.625). The iterates oscillate because the unscaled feature x has large values. **Standardizing features** (subtract mean, divide by standard deviation) makes the loss surface rounder and gradient descent faster and more stable.

On f(w) = w² starting from w = 1: with η = 0.1 the iterates are 0.8, 0.64, 0.512 (converging); with η = 1.1 they are -1.2, 1.44, -1.728 (diverging). A learning rate that is too large diverges; too small is slow.

Variants: **batch** GD uses all N examples per step; **stochastic** GD uses one; **mini-batch** SGD (32 to 512 examples) is the practical default because it is noisy enough to escape shallow traps yet vectorizes well.

### 2.3 Polynomial features and overfitting
Feeding x, x², x³, ... to a linear model gives a flexible curve. With 10 noisy samples of sin(2πx) (noise standard deviation 0.3) the experiment below, averaged over 200 resamples, shows the trade-off.

- Degree 1 (a straight line): bias² 0.225, variance 0.016. It underfits.
- Degree 3: bias² 0.006, variance 0.030. Close to the sweet spot.
- Degree 9: bias² 0.002, variance 0.620. It passes through every training point and overfits: tiny bias, huge variance.

## Chapter 3. Bias, Variance and Regularization

### 3.1 Bias-variance decomposition
For squared error, the expected test error at a point splits as

```
E[(y - ŷ)²] = Bias² + Variance + Noise
```

*Bias* is the error from wrong assumptions (a line cannot fit a sine). *Variance* is the sensitivity to the particular training sample. *Noise* is irreducible. For example, bias = 0.5, variance = 0.3 and noise standard deviation 0.2 give expected error 0.25 + 0.3 + 0.04 = 0.59. Simple models have high bias and low variance; complex models the reverse. The goal is the sweet spot, found by validation.

### 3.2 Ridge (L2) regularization
Add a penalty: J(w) = MSE + λ ||w||². The closed form is w = (XᵀX + λI)⁻¹ Xᵀy (do not penalize the intercept). Ridge shrinks weights toward zero and stabilizes ill-conditioned problems.

**Worked example.** For the data of section 2.1 the centered slope is S_xy / (S_xx + λ) with S_xy = 4 and S_xx = 5. The slope is 0.8 for λ = 0, 0.667 for λ = 1 and 0.4 for λ = 5, and the intercept rises correspondingly (1.5, 1.833, 2.5) so the line still passes through the means.

### 3.3 Lasso (L1) regularization
The penalty λ Σ|w_j| drives some weights to exactly zero, giving **sparse** models and implicit feature selection. For a single weight the solution is the **soft threshold**: shrink by λ and clip at zero. With λ = 0.5: 0.8 becomes 0.3, 0.3 becomes 0, and -1.2 becomes -0.7. Geometrically the L1 ball has corners on the axes, where the loss contours tend to touch it.

### 3.4 Other ways to control variance
More data, early stopping, dropout (for networks), data augmentation, ensembling (section 6) and simpler models. Choose λ by cross-validation on a log grid (1e-4 ... 1e2).

## Chapter 4. Classification

### 4.1 Logistic regression
For two classes, model P(y = 1 | x) = σ(w·x + b) with the sigmoid σ(z) = 1/(1 + e^-z). Train with the **binary cross-entropy** (log loss):

```
J = -(1/N) Σ [ y log p + (1 - y) log(1 - p) ]
```

Its gradient is neat: ∂J/∂w = (1/N) Σ (p - y) x and ∂J/∂b = (1/N) Σ (p - y). The loss is convex, so gradient descent reaches the global optimum.

**Worked example.** x = 1, 2, 3, 4 with labels 0, 0, 1, 1, starting from w = b = 0. All predictions are 0.5 and the loss is ln 2 = 0.6931. The gradients are ∂J/∂w = -0.5 and ∂J/∂b = 0. With η = 0.5 the update gives w = 0.25, b = 0, new probabilities 0.562, 0.622, 0.679, 0.731 and loss 0.6250.

The decision boundary w·x + b = 0 is a hyperplane: logistic regression is a *linear* classifier. Why cross-entropy rather than MSE? For predictions (0.9, 0.2, 0.6) and labels (1, 0, 1) the log loss is 0.280 and the MSE 0.070, but the cross-entropy gradient does not vanish when the model is confidently wrong, whereas MSE with a sigmoid saturates.

### 4.2 Softmax and multiclass
For K classes, logits z produce probabilities softmax(z)_k = e^{z_k} / Σ e^{z_j}, trained with cross-entropy -log p_true. The gradient with respect to the logits is simply p - y (one-hot). **Worked example.** z = (2.0, 1.0, 0.1) gives p = (0.659, 0.242, 0.099). If the true class is 0, the loss is -ln 0.659 = 0.417 and the gradient is (-0.341, 0.242, 0.099). For a two-example batch with logits (2, 1, 0.1) → class 0 and (0.5, 2.5, 0.3) → class 1, the losses are 0.417 and 0.220, mean 0.3185.

### 4.3 Evaluation metrics
Accuracy misleads on imbalanced data (99 percent negatives means a model that always says "negative" scores 99 percent). Use the confusion matrix:

```
              predicted +    predicted -
actual +         TP             FN
actual -         FP             TN
```

- Precision = TP/(TP + FP): of the alarms, how many are real.
- Recall (sensitivity, TPR) = TP/(TP + FN): of the real positives, how many are caught.
- Specificity = TN/(TN + FP); false-positive rate = FP/(FP + TN).
- F1 = 2PR/(P + R), the harmonic mean.

**Worked example.** TP = 40, FP = 10, FN = 20, TN = 130 (N = 200). Accuracy = 170/200 = 0.85, precision = 0.80, recall = 0.667, F1 = 0.727, specificity = 0.929, FPR = 0.071.

Threshold choice trades precision against recall. The **ROC curve** plots TPR against FPR as the threshold varies; the **AUC** is the probability that a random positive is scored above a random negative (0.5 = chance, 1 = perfect). For scores (0.9, 0.8, 0.7, 0.6, 0.55, 0.4, 0.35, 0.2) with labels (1, 1, 0, 1, 0, 0, 1, 0), AUC = 0.75. At threshold 0.5 we get TP = 3, FP = 2, FN = 1, TN = 2 (precision 0.6, recall 0.75); at 0.65, TP = 2, FP = 1, FN = 2, TN = 3 (precision 0.667, recall 0.5). Use precision-recall curves when positives are rare.

## Chapter 5. Classical Models

### 5.1 k-nearest neighbours
Predict by majority vote of the k closest training points. No training, but slow prediction and sensitive to feature scale (standardize!). With training points (1,1)→0, (2,1)→0, (4,3)→1, (5,4)→1, (3,3)→0 and query (3.5, 3), the distances are 3.20, 2.50, 0.50, 1.80, 0.50. The 3 nearest are (4,3), (3,3) and (5,4): labels 1, 0, 1, so the vote is class 1. Small k means high variance, large k high bias.

### 5.2 Naive Bayes
Assume features are independent given the class: P(y | x) ∝ P(y) Π P(x_j | y). With Laplace smoothing, a word count is (count + 1)/(total + 2) for a binary feature. **Worked example (spam).** 10 emails: 4 spam, 6 ham. "free" appears in 3 of the 4 spam and 1 of the 6 ham; "meeting" in 0 of the 4 spam and 3 of the 6 ham. Smoothed: P(free | spam) = 4/6, P(free | ham) = 2/8, P(meeting | spam) = 1/6, P(meeting | ham) = 4/8. For an email containing both words, score(spam) = 0.4 × 0.667 × 0.1667 = 0.0444 and score(ham) = 0.6 × 0.25 × 0.5 = 0.075. The posterior for spam is 0.0444/0.1194 = 0.372, so it is classified ham.

### 5.3 Decision trees
A tree splits the data by feature thresholds. Choose splits that reduce impurity. For class proportions p_k: entropy H = -Σ p_k log₂ p_k and Gini G = 1 - Σ p_k². **Worked example.** A node has 9 positives and 5 negatives: H = 0.940 and G = 0.459. A split sends (6 pos, 2 neg) left (H = 0.811, G = 0.375) and (3, 3) right (H = 1.0, G = 0.5). Information gain = 0.940 - (8/14 × 0.811 + 6/14 × 1.0) = 0.048; the weighted Gini after the split is 0.429. Trees overfit unless limited by depth, minimum samples per leaf or pruning.

### 5.4 Support vector machines
A linear SVM finds the hyperplane with the largest **margin**. With w·x + b = ±1 on the support vectors the margin width is 2/||w||. Example: w = (0.5, 0.5), b = -1 gives +1 at (2,2) and -1 at (0,0), margin 2/0.707 = 2.83. The soft-margin parameter C trades margin against errors. **Kernels** (RBF, polynomial) compute inner products in a high-dimensional space without forming it, giving non-linear boundaries.

## Chapter 6. Ensembles

- **Bagging**: train many models on bootstrap resamples and average. Averaging n independent predictors of variance σ² gives variance σ²/n (σ² = 4, n = 25 gives 0.16); in practice the models are correlated so the gain is smaller. A **random forest** adds random feature subsets to decorrelate trees.
- **Boosting**: train models sequentially, each correcting the previous errors (AdaBoost, gradient boosting, XGBoost, LightGBM). Gradient-boosted trees are usually the strongest method on tabular data.
- **Stacking**: a meta-model combines base-model predictions.

## Chapter 7. Unsupervised Learning

### 7.1 k-means
Alternate: assign each point to the nearest centroid, then move each centroid to its cluster mean. It minimizes the within-cluster sum of squares and converges to a local optimum, so run it several times (k-means++ initialization). **Worked example.** Points (1,1), (1.5,2), (3,5), (5,7), (3.5,5), (4.5,5), (3.5,4.5), initial centroids (1,1) and (5,7). Iteration 1 assigns the first two points to cluster A and the other five to cluster B; the new centroids are (1.25, 1.5) and (3.9, 5.3). A second iteration changes no assignments, so it has converged. Choose k with the elbow of the inertia curve or the silhouette score.

### 7.2 Principal component analysis
PCA finds orthogonal directions of maximal variance: eigenvectors of the covariance matrix. Steps: center the data, compute the covariance, take eigenvalues in decreasing order, project onto the top components. **Worked example.** Data (2,0), (0,2), (3,1), (1,3), (4,4), mean (2,2), covariance [[2.5, 0.5], [0.5, 2.5]]. The eigenvalues are 3 (direction (1,1)/√2) and 2 (direction (-1,1)/√2), so the first component explains 3/5 = 60 percent of the variance. Projections on it: -1.414, -1.414, 0, 0, 2.828. PCA is also computed through the SVD of the centered data matrix. Use it for visualization, compression and decorrelation, always fitting on training data only.

## Chapter 8. Neural Networks

### 8.1 The neuron and the multilayer perceptron
A neuron computes a = φ(w·x + b). Stacking layers gives h = φ(W₁x + b₁), ŷ = W₂h + b₂. Without a non-linearity φ the stack collapses to one linear map. Common activations: sigmoid, tanh, **ReLU** max(0, z) (the default, cheap and non-saturating for z > 0), leaky ReLU, GELU. A network with one hidden layer can approximate any continuous function on a compact set (universal approximation), but depth makes this efficient.

**Forward pass example (ReLU).** W₁ = [[1, 2], [-1, 1]], b₁ = (0, 1), W₂ = (2, -1), b₂ = 0.5. For x = (1, 2): pre-activations (5, 2), hidden (5, 2), output 2×5 - 2 + 0.5 = 8.5. For x = (1, -2): pre-activations (-3, -2), both ReLUs output 0, so the output is 0.5 and the gradient to W₁ is zero: this is a **dead ReLU**.

### 8.2 Backpropagation
Backpropagation is the chain rule applied efficiently on the computation graph. For each layer, compute the local gradient and multiply by the gradient arriving from above. Steps: forward pass storing activations; compute the loss; backward pass computing ∂L/∂(each parameter).

**Worked example.** Network 2-2-1 with sigmoid hidden and output units, squared loss L = ½(o - t)². W₁ = [[0.5, -0.4], [0.3, 0.8]], b₁ = (0.1, -0.2), W₂ = (0.7, -0.6), b₂ = 0.05, input x = (1, 0), target t = 1.
- Forward: hidden pre-activations (0.6, 0.1) give h = (0.6457, 0.5250); output pre-activation 0.7(0.6457) - 0.6(0.5250) + 0.05 = 0.187 gives o = 0.5466; L = 0.1028.
- Output delta: δ_o = (o - t) o (1 - o) = (-0.4534)(0.2478) = -0.1124.
- ∂L/∂W₂ = δ_o h = (-0.0725, -0.0590); ∂L/∂b₂ = -0.1124.
- Hidden deltas: δ_h = δ_o W₂ ⊙ h(1 - h) = (-0.0180, 0.0168).
- ∂L/∂W₁ = δ_h xᵀ = [[-0.0180, 0], [0.0168, 0]] (the second column is zero because x₂ = 0); ∂L/∂b₁ = (-0.0180, 0.0168).
These values match PyTorch autograd to four decimals. Always **gradient check** a hand-written backward pass against finite differences.

**Vanishing and exploding gradients.** Products of many small derivatives (sigmoid derivative is at most 0.25) shrink the gradient exponentially with depth. Remedies: ReLU-family activations, careful initialization (Xavier for tanh, He for ReLU), normalization layers, residual connections.

### 8.3 Optimizers
- **SGD with momentum**: v ← βv + g, w ← w - ηv. On f = w² from w = 1 with η = 0.1, β = 0.9: v = 2, 3.4, 3.98 and w = 0.8, 0.46, 0.062. Momentum accelerates along consistent directions.
- **Adam**: keeps running estimates m (mean of gradients) and v (mean of squared gradients), with bias correction, and steps by η m̂/(√v̂ + ε). On f = w² from w = 1 with η = 0.1: w = 0.900, 0.800, 0.702. The first Adam step is essentially η times the sign of the gradient. Typical defaults: β₁ = 0.9, β₂ = 0.999, ε = 1e-8, η = 1e-3.
- Use a **learning-rate schedule** (step decay, cosine, warmup) and **gradient clipping** for recurrent and transformer models.

### 8.4 Regularization for networks
**Weight decay** (L2), **dropout** (randomly zero units with probability p during training and rescale), **early stopping** (stop when validation loss rises), **data augmentation**, and **batch normalization**. Batch norm normalizes each feature over the mini-batch: for activations 2, 4, 6, 8, the mean is 5 and the variance 5, so the normalized values are -1.342, -0.447, 0.447, 1.342, followed by a learned scale γ and shift β. It stabilizes and speeds training. At test time it uses running averages.

### 8.5 Convolutional neural networks
A convolution slides a small kernel over the input, sharing weights and exploiting locality, so the parameter count is far smaller than a fully connected layer. Output size = ⌊(n + 2p - k)/s⌋ + 1 for input n, kernel k, padding p, stride s. A 32 input with k = 5, p = 0, s = 1 gives 28; a 28 input with k = 3, p = 1, s = 2 gives 14. Parameters of a conv layer: k × k × C_in × C_out + C_out; a 3×3 convolution from 3 to 16 channels has 448. In the classic LeNet layout, conv 1→6 with 5×5 has 156 parameters, conv 6→16 has 2,416, and a dense 400→120 layer has 48,120. A fully connected 784-128-10 network has 101,770 parameters.

**Example.** Image [[1,2,0],[0,1,3],[2,1,0]] with kernel [[1,0],[0,-1]] (no padding, stride 1, cross-correlation as deep-learning libraries do): the output is [[0, -1], [-1, 1]]. Max pooling 2×2 on [[1,3,2,0],[4,2,1,1],[0,1,5,2],[2,3,1,4]] gives [[4, 2], [3, 5]]. Pooling reduces resolution and gives some translation invariance.

### 8.6 Sequences and attention
Recurrent networks (RNN, LSTM, GRU) carry a hidden state through time but train slowly and forget long-range context. **Attention** lets each position look at all others: Attention(Q, K, V) = softmax(QKᵀ/√d_k) V. The **transformer** stacks attention and feed-forward blocks with residual connections and layer normalization; it replaced recurrence in language and is now used for vision and audio. Large language models are transformers trained to predict the next token, then fine-tuned with human feedback.

## Chapter 9. Practical Training and Debugging

1. Start tiny: overfit a batch of 10 examples. If you cannot, there is a bug.
2. Check the loss at initialization: for K-way softmax it should be about ln K (ln 10 = 2.30).
3. Plot training and validation loss. Both high: underfit (bigger model, train longer). Training low, validation high: overfit (regularize, more data).
4. Change one thing at a time; fix random seeds; log everything.
5. Class imbalance: reweight the loss, resample, or choose the metric and threshold carefully.
6. Search hyperparameters on a log scale; random search beats grid search.

## Chapter 10. Deployment and MLOps

- **Serving**: batch prediction versus online APIs (REST/gRPC); watch latency and throughput.
- **Model compression**: quantization (float32 → int8 gives 4× smaller), pruning, distillation; export to ONNX, TensorFlow Lite or TorchScript for edge devices.
- **Monitoring**: input data drift, concept drift, prediction distribution, accuracy once labels arrive. Retrain on a schedule or trigger.
- **Reproducibility**: version code, data and models; keep a model card documenting data, intended use and limitations.
- **Responsible AI**: audit for bias across groups (compare error rates by subgroup), protect privacy, explain predictions where decisions affect people, and keep a human in the loop for high-stakes use.

## Chapter 11. Common Mistakes Checklist
- Fitting the scaler or PCA on all the data before splitting (leakage).
- Tuning on the test set; reporting the best of many runs.
- Using accuracy on imbalanced data.
- Forgetting to standardize features for k-NN, SVM, ridge and gradient descent.
- Learning rate too high (loss goes to NaN) or no shuffling of training data.
- Comparing models without a baseline or without variance across seeds.
- Mixing up cross-correlation and convolution, or forgetting that PyTorch loss functions expect logits, not probabilities.
