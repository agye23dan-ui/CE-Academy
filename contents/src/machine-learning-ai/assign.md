# Machine Learning and AI: Assignments with Worked Solutions

Show every step and state units or assumptions. All numerical answers below were computed and checked with NumPy, scikit-learn or PyTorch. Where a question says "in code" write a short Python function and test it on the given data.

# Assignment 1: Regression, Gradient Descent and Regularization (60 marks)

## Questions

**Q1. Least squares (14 marks)** Data (x, y): (0, 1), (1, 3), (2, 4), (3, 8), (4, 9). (a) Form XᵀX and Xᵀy for the model ŷ = b + w x [3]. (b) Solve the normal equations for b and w [3]. (c) Compute the residuals, the MSE and R² [5]. (d) Predict y at x = 5 and say why that prediction is an extrapolation risk [3].

**Q2. Gradient descent (12 marks)** Use the data of Q1. (a) Write the gradient of J = (1/N) Σ (b + w x - y)² [3]. (b) Starting from b = w = 0 with η = 0.05, perform two full-batch steps [5]. (c) Explain why standardizing x would help and give the standardized x values (population standard deviation) [4].

**Q3. Regularization (12 marks)** (a) For the data of Q1 find the ridge slope and intercept for λ = 2 and λ = 10, penalizing only the slope [6]. (b) OLS coefficients (3, -0.4, 1.2) on orthonormal features are fitted with an L1 penalty λ = 0.5. Give the lasso solution [3]. (c) Explain how ridge and lasso differ in the kind of model they produce [3].

**Q4. Validation (10 marks)** (a) Perform leave-one-out cross-validation on the data of Q1 and compute the LOO MSE [7]. (b) Compare it with the training MSE and explain the difference [3].

**Q5. Bias and variance (6 marks)** A regressor has squared bias 0.04, variance 0.09 and the data noise has standard deviation 0.3. (a) Find the expected squared test error [2]. (b) The model is changed so the bias falls to 0.01 but the variance rises to 0.20. Is that an improvement? [2] (c) Name two ways to reduce variance without changing the model class [2].

**Q6. In code (6 marks)** Write a function fit_ridge(X, y, lam) that returns the weights using the closed form, and explain how you would choose lam.

## Solutions

**Q1.**
(a) With the column of ones, XᵀX = [[5, 10], [10, 30]] and Xᵀy = [25, 71].
(b) Solve 5b + 10w = 25 and 10b + 30w = 71. Multiplying the first by 2 and subtracting: 10w = 21, so **w = 2.1** and b = (25 - 21)/5 = **0.8**.
(c) Fitted values: 0.8, 2.9, 5.0, 7.1, 9.2. Residuals y - ŷ: **0.2, 0.1, -1.0, 0.9, -0.2** (they sum to 0). SS_res = 0.04 + 0.01 + 1.00 + 0.81 + 0.04 = 1.90, **MSE = 0.38**. ȳ = 5, SS_tot = 16 + 4 + 1 + 9 + 16 = 46, so **R² = 1 - 1.9/46 = 0.959**.
(d) ŷ(5) = 0.8 + 10.5 = **11.3**. The data only cover x from 0 to 4; the linear trend may not continue (saturation, curvature), and there is no evidence about the region beyond the training range.

**Q2.**
(a) ∂J/∂b = (2/N) Σ (ŷ - y) and ∂J/∂w = (2/N) Σ (ŷ - y) x.
(b) Step 1: At b = w = 0 the errors ŷ - y are -1, -3, -4, -8, -9, whose sum is -25, so ∂J/∂b = (2/5)(-25) = -10. Σ(ŷ - y)x = 0 - 3 - 8 - 24 - 36 = -71, so ∂J/∂w = -28.4.
Step 2: Update: **b = 0.5, w = 1.42**.
Step 3: Second step: ŷ = 0.5 + 1.42x = 0.5, 1.92, 3.34, 4.76, 6.18; errors -0.5, -1.08, -0.66, -3.24, -2.82 with sum -8.3 and Σ error·x = -1.08 - 1.32 - 9.72 - 11.28 = -23.4.
Step 4: Gradients -3.32 and -9.36.
Step 5: Update: **b = 0.666, w = 1.888**, moving toward (0.8, 2.1).
(c) The unscaled x makes the w-direction steep and the b-direction shallow (curvature of XᵀX has widely different eigenvalues), forcing a small η and slow progress. The mean of x is 2 and the population standard deviation is √2 = 1.414, so z = **-1.414, -0.707, 0, 0.707, 1.414**.

**Q3.**
(a) Step 1: Centered: x̄ = 2, ȳ = 5, S_xy = 21, S_xx = 10.
Step 2: Ridge slope = S_xy/(S_xx + λ): for **λ = 2, slope 1.75 and intercept 5 - 1.75 × 2 = 1.5**; for **λ = 10, slope 1.05 and intercept 2.9**.
Step 3: The slope shrinks toward zero as λ grows and the line still passes through (x̄, ȳ).
(b) Soft-threshold each coefficient by 0.5: **(2.5, 0, 0.7)**.
(c) Ridge shrinks all weights smoothly and rarely makes any exactly zero; it handles correlated features by sharing weight. Lasso sets some weights exactly to zero, producing a sparse, more interpretable model that performs feature selection.

**Q4.**
(a) Step 1: Leave out each point, refit, predict the held-out point.
Step 2: Held-out predictions and squared errors: x = 0: 0.5 (error² 0.25); x = 1: 2.857 (0.0204); x = 2: 5.25 (1.5625); x = 3: 6.714 (1.6531); x = 4: 9.5 (0.25).
Step 3: Mean: **LOO MSE = 0.747**.
(b) The training MSE (0.38) is optimistic because each point helps fit the line that predicts it; LOO is nearly twice as large and is the honest estimate of generalization error.

**Q5.**
(a) 0.04 + 0.09 + 0.3² = **0.22**.
(b) New error 0.01 + 0.20 + 0.09 = 0.30 > 0.22, so it is **worse**: the variance increase outweighs the bias reduction.
(c) More training data, bagging or ensembling, regularization, early stopping, feature reduction.

**Q6.**
```
import numpy as np
def fit_ridge(X, y, lam):
    n, d = X.shape
    I = np.eye(d); I[0, 0] = 0          # do not penalize the intercept column
    return np.linalg.solve(X.T @ X + lam * I, X.T @ y)
```
Choose lam by k-fold cross-validation over a log-spaced grid (for example 1e-4 to 1e2) and pick the value with the lowest validation error; then refit on all training data and evaluate once on the test set. Standardize the features first so that the penalty treats them equally.

# Assignment 2: Classification, Classical Models and Unsupervised Learning (70 marks)

## Questions

**Q1. Logistic regression (14 marks)** Four examples with features (x₁, x₂) = (1, 2), (2, 1), (3, 3), (4, 3) and labels 0, 0, 1, 1. Start from w = (0, 0), b = 0. (a) Give the predicted probabilities and the loss [3]. (b) Compute the gradient with respect to w and b [4]. (c) Perform one update with η = 0.2 and give the new probabilities and loss [5]. (d) A trained model has w = (1, -1), b = 0.5. Find P(y = 1) for x = (2, 1) [2].

**Q2. Evaluation (12 marks)** A fraud detector is tested on 1,000 transactions: TP = 85, FP = 15, FN = 30, TN = 870. (a) Compute accuracy, precision, recall, specificity and F1 [6]. (b) What accuracy does a model that always predicts "not fraud" obtain, and why is accuracy a poor metric here? [3] (c) A screening test has sensitivity 0.9 and false-positive rate 0.10 for a condition with prevalence 2 percent. Find P(condition | positive) [3].

**Q3. k-nearest neighbours (8 marks)** Training points (1,1)→0, (1,3)→0, (2,2)→0, (4,4)→1, (5,3)→1, (5,5)→1. Classify the query (3.5, 3) with k = 1 and k = 3 [5]. Explain why features must be standardized for k-NN [3].

**Q4. Decision trees (12 marks)** A node contains 8 positive and 8 negative examples. Split A produces children (7 pos, 1 neg) and (1 pos, 7 neg). Split B produces (4 pos, 8 neg) and (4 pos, 0 neg). (a) Compute the parent entropy and Gini [2]. (b) Compute the information gain and weighted Gini of both splits [6]. (c) Which split is preferred and why? How would you stop the tree from overfitting? [4]

**Q5. k-means (10 marks)** One-dimensional data 1, 2, 4, 11, 12, 15 with initial centroids 2 and 11. (a) Run k-means until convergence, showing assignments and centroids [6]. (b) Compute the final within-cluster sum of squares [2]. (c) Give one weakness of k-means [2].

**Q6. PCA (8 marks)** A dataset has covariance matrix C = [[4, 2], [2, 3]]. (a) Find the eigenvalues [4]. (b) What fraction of the variance does the first principal component explain? [2] (c) Give two uses of PCA [2].

**Q7. Naive Bayes reasoning (6 marks)** Explain the "naive" assumption, say when it is violated, and why naive Bayes can still classify well.

## Solutions

**Q1.**
(a) All logits are 0, so every probability is **0.5** and the loss is ln 2 = **0.6931**.
(b) p - y = (0.5, 0.5, -0.5, -0.5). ∂J/∂w₁ = (1/4)(0.5×1 + 0.5×2 - 0.5×3 - 0.5×4) = (1/4)(-2) = **-0.5**. ∂J/∂w₂ = (1/4)(0.5×2 + 0.5×1 - 0.5×3 - 0.5×3) = (1/4)(-1.5) = **-0.375**. ∂J/∂b = (1/4)(0) = **0**.
(c) Step 1: w = (0.1, 0.075), b = 0.
Step 2: Logits 0.25, 0.2, 0.525, 0.625 give probabilities **0.5622, 0.5683, 0.6283, 0.6514**.
Step 3: Loss = (1/4)(-ln 0.4378 - ln 0.4317 - ln 0.6283 - ln 0.6514) = **0.6399**, a decrease from 0.6931.
(d) z = 2 - 1 + 0.5 = 1.5 and σ(1.5) = **0.8176**.

**Q2.**
(a) Step 1: Accuracy = 955/1000 = **0.955**.
Step 2: Precision = 85/100 = **0.85**.
Step 3: Recall = 85/115 = **0.739**.
Step 4: Specificity = 870/885 = **0.983**.
Step 5: F1 = 2(0.85)(0.739)/(0.85 + 0.739) = **0.791**.
(b) Predicting "not fraud" always gives (870 + 15)/1000 = **0.885** accuracy while catching no fraud at all. Accuracy hides the failure on the rare class; use precision, recall, F1, the precision-recall curve or cost-weighted metrics.
(c) P = (0.9)(0.02)/[(0.9)(0.02) + (0.10)(0.98)] = 0.018/0.116 = **0.155**. Even a good test gives mostly false alarms when the condition is rare (base-rate effect).

**Q3.** Step 1: Distances from (3.5, 3): to (4,4) 1.118; to (5,3) 1.500; to (2,2) 1.803; to (1,3) 2.500; to (5,5) 2.500; to (1,1) 3.202.
Step 2: **k = 1**: nearest is (4,4) → class **1**.
Step 3: **k = 3**: neighbours (4,4), (5,3), (2,2) with labels 1, 1, 0 → majority class **1**.
Step 4: Distances are dominated by features with large numeric ranges: if x₂ were measured in units 100 times larger it would decide almost every neighbor, so standardize each feature to zero mean and unit variance (fitting the scaler on training data only).

**Q4.**
(a) Parent: H = **1.0 bit**, Gini = **0.5**.
(b) Split A: each child (7,1) or (1,7) has H = 0.5436; weighted H = 0.5436, so **IG = 0.456**; Gini of each child = 1 - (0.875² + 0.125²) = 0.21875, weighted **0.219**. Split B: child (4,8): H = 0.9183, child (4,0): H = 0; weighted H = (12/16)(0.9183) = 0.6887, **IG = 0.311**; Gini (4,8) = 0.4444, (4,0) = 0, weighted **0.333**.
(c) **Split A** has the larger gain and lower Gini. Limit overfitting by a maximum depth, a minimum number of samples per leaf or split, cost-complexity pruning, or by using an ensemble such as a random forest.

**Q5.**
(a) Iteration 1: distances to centroids 2 and 11: points 1, 2, 4 are nearest to 2 (cluster A); 11, 12, 15 nearest to 11 (cluster B). New centroids: A = (1 + 2 + 4)/3 = **2.333**, B = (11 + 12 + 15)/3 = **12.667**. Iteration 2: the assignments are unchanged, so the algorithm has **converged**.
(b) A: (1.333² + 0.333² + 1.667²) = 4.667; B: (1.667² + 0.667² + 2.333²) = 8.667. Total **13.33**.
(c) Sensitive to initialization (local optima), requires k to be chosen in advance, assumes roughly spherical equal-size clusters, and is affected by outliers.

**Q6.**
(a) det(C - λI) = (4 - λ)(3 - λ) - 4 = λ² - 7λ + 8 = 0, so λ = (7 ± √17)/2 = **5.562 and 1.438**.
(b) 5.562/7 = **0.795** (79.5 percent). The first component direction is (0.788, 0.615).
(c) Visualization in 2D or 3D, compression and noise reduction, decorrelating features before another model, speeding up training.

**Q7.** The "naive" assumption is that features are conditionally independent given the class, so P(x | y) = Π P(x_j | y). It is violated whenever features are correlated (for example the words "New" and "York"). The probabilities then become over-confident, but classification only needs the ranking of the classes, which often stays correct; the model has few parameters, trains in one pass and needs little data.

# Assignment 3: Neural Networks, Optimization and Deployment (70 marks)

## Questions

**Q1. Backpropagation of one neuron (12 marks)** A neuron has weights w = (0.5, 0.5), bias b = 0.5 and ReLU activation. Loss L = ½(a - t)² with input x = (2, 1) and target t = 3. (a) Compute z, a and L [3]. (b) Compute ∂L/∂w and ∂L/∂b [4]. (c) Apply one gradient step with η = 0.1 and compute the new loss [5].

**Q2. Softmax and cross-entropy (10 marks)** Logits z = (1, 2, 3). (a) Compute the softmax probabilities [3]. (b) Compute the cross-entropy loss if the true class is the third (index 2) and if it is the first [3]. (c) Give the gradient of the loss with respect to z for each case [2]. (d) What loss would you expect at initialization for a 4-class problem with uniform predictions? [2]

**Q3. Optimizers (12 marks)** Minimize f(w) = w² from w = 2 (gradient 2w). (a) Perform three steps of SGD with momentum (v ← 0.5v + g, w ← w - 0.1 v) [5]. (b) Perform three steps of Adam (η = 0.1, β₁ = 0.9, β₂ = 0.999, ε = 1e-8) and comment on the first step [5]. (c) When is Adam preferred over plain SGD? [2]

**Q4. Convolutional layers (12 marks)** (a) Compute the output size for: input 224, kernel 7, padding 3, stride 2; input 56, kernel 3, padding 1, stride 1; input 56, kernel 3, padding 0, stride 2; input 64, kernel 5, padding 2, stride 1 [4]. (b) How many parameters has a 3×3 convolution from 64 to 128 channels (with bias), a 7×7 convolution from 3 to 64 channels, and a dense layer from 9,216 to 4,096 units? [4] (c) Explain why convolutions suit images better than dense layers [4].

**Q5. Network capacity (8 marks)** (a) Count the parameters of an MLP with layer sizes 100-50-10 [2]. (b) Show that two linear layers without a non-linearity collapse to one layer, using W₁ = [[1, 2], [0, 1]] and W₂ = [3, 1] [3]. (c) Why is ReLU usually preferred to the sigmoid in hidden layers? [3]

**Q6. Normalization and regularization (8 marks)** (a) Apply batch normalization (ε = 1e-5, γ = 1, β = 0) to the activations 1, 3, 5, 7, 9 [4]. (b) Describe how dropout works in training and at test time [2]. (c) What is early stopping? [2]

**Q7. Deployment (8 marks)** A model has 25 million parameters stored in float32. (a) Give its size in MB and the size after int8 quantization [2]. (b) Name three things to monitor after deployment and the risk of each [3]. (c) Explain data drift versus concept drift [3].

## Solutions

**Q1.**
(a) z = 0.5×2 + 0.5×1 + 0.5 = 2.0; since z > 0, a = **2.0**; L = ½(2 - 3)² = **0.5**.
(b) ∂L/∂a = a - t = -1; the ReLU derivative is 1 (z > 0), so ∂L/∂z = -1. Then ∂L/∂w = -1 × x = **(-2, -1)** and ∂L/∂b = **-1**.
(c) w = (0.5 + 0.2, 0.5 + 0.1) = **(0.7, 0.6)**, b = **0.6**. New z = 1.4 + 0.6 + 0.6 = 2.6, a = 2.6, L = ½(0.4)² = **0.08**: the loss fell from 0.5 to 0.08.

**Q2.**
(a) e¹ = 2.718, e² = 7.389, e³ = 20.086; sum 30.193. p = **(0.0900, 0.2447, 0.6652)**.
(b) True class 2: -ln 0.6652 = **0.4076**. True class 0: -ln 0.0900 = **2.4076**.
(c) Gradient = p - one-hot: true class 2 → **(0.090, 0.245, -0.335)**; true class 0 → **(-0.910, 0.245, 0.665)**.
(d) Uniform predictions give p = 1/4 and loss ln 4 = **1.386**. A very different starting loss signals a bug or bad initialization.

**Q3.**
(a) Step 1: g = 4, v = 4, w = 2 - 0.4 = **1.6**. Step 2: g = 3.2, v = 0.5×4 + 3.2 = 5.2, w = 1.6 - 0.52 = **1.08**. Step 3: g = 2.16, v = 2.6 + 2.16 = 4.76, w = 1.08 - 0.476 = **0.604**.
(b) Step 1: g = 4; m = 0.4, v = 0.016; m̂ = 4, v̂ = 16; step = 0.1 × 4/(4 + 1e-8) ≈ 0.1, so **w = 1.9**. Step 2: g = 3.8, m̂ = 3.895, v̂ = 15.22, step ≈ 0.0999, **w = 1.8002**. Step 3: **w = 1.7006**. The first step is almost exactly η in magnitude whatever the gradient scale: Adam normalizes by the gradient magnitude, so each step is about η per parameter.
(c) Adam adapts per-parameter step sizes, works well with sparse or noisy gradients and needs little tuning, so it is a strong default for transformers and many deep nets. Well-tuned SGD with momentum often generalizes slightly better on image tasks.

**Q4.**
(a) ⌊(224 + 6 - 7)/2⌋ + 1 = **112**; ⌊(56 + 2 - 3)/1⌋ + 1 = **56**; ⌊(56 - 3)/2⌋ + 1 = **27**; ⌊(64 + 4 - 5)/1⌋ + 1 = **64**.
(b) 3×3×64×128 + 128 = **73,856**; 7×7×3×64 + 64 = **9,472**; 9,216×4,096 + 4,096 = **37,752,832**.
(c) Weight sharing: the same small kernel is applied at every position, so the parameter count is tiny and independent of image size; locality: nearby pixels are correlated and form edges and textures; translation equivariance: a feature is detected wherever it appears; and stacking layers builds a hierarchy from edges to parts to objects.

**Q5.**
(a) (100×50 + 50) + (50×10 + 10) = 5,050 + 510 = **5,560**.
(b) W₂W₁ = [3, 1] [[1, 2], [0, 1]] = [3×1 + 1×0, 3×2 + 1×1] = **[3, 7]**, a single linear layer, so depth adds nothing without non-linearity.
(c) The sigmoid saturates: its derivative is at most 0.25 and near 0 for large |z|, causing vanishing gradients in deep networks; its output is not zero-centered. ReLU has gradient 1 for z > 0, is cheap and gives sparse activations (with the risk of dead units, mitigated by leaky ReLU).

**Q6.**
(a) Mean 5, variance (16 + 4 + 0 + 4 + 16)/5 = 8, so the normalized values are (x - 5)/√(8.00001) = **-1.414, -0.707, 0, 0.707, 1.414**.
(b) In training each unit is zeroed with probability p and the remaining outputs are scaled by 1/(1 - p) (inverted dropout), which prevents co-adaptation; at test time all units are used with no scaling.
(c) Monitor validation loss during training and stop (keeping the best checkpoint) when it stops improving for a set number of epochs, to prevent overfitting.

**Q7.**
(a) 25×10⁶ × 4 bytes = **100 MB**; int8 uses 1 byte each = **25 MB** (4× smaller, usually with small accuracy loss).
(b) Examples: input data distribution (drift makes predictions unreliable); prediction distribution and confidence (silent degradation); latency and throughput (service-level failures); accuracy against delayed labels; fairness across subgroups.
(c) **Data drift**: the input distribution P(x) changes (a new camera, a new user population) while the relationship may still hold. **Concept drift**: the relationship P(y | x) itself changes (user tastes shift, fraud tactics evolve). Both require monitoring and retraining.
