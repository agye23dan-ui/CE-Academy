# Machine Learning and AI: Final Examination

Duration: 3 hours. Calculator and a one-page formula sheet allowed. Total: 100 marks.
- Section A: 20 multiple-choice questions, 1 mark each (20 marks). Answer all.
- Section B: 8 short questions, 5 marks each (40 marks). Answer all.
- Section C: 5 long questions, 10 marks each. Answer any four (40 marks).

Useful values: σ(0) = 0.5, e¹ = 2.718, e² = 7.389, e^0.5 = 1.649, e^-1 = 0.368, ln 2 = 0.693, ln 4 = 1.386.

## Section A: Multiple Choice (20 marks)

**1.** Compared with a simple model, a very flexible model typically has
A) higher bias and higher variance  B) lower bias and higher variance  C) higher bias and lower variance  D) lower bias and lower variance

**2.** The main purpose of k-fold cross-validation is to
A) increase the training set  B) remove outliers  C) estimate generalization performance and choose hyperparameters  D) speed up training

**3.** Which of these is an example of data leakage?
A) fitting a scaler on the whole dataset before splitting  B) fitting the scaler on training data only  C) shuffling the training set  D) using a held-out test set

**4.** Standardizing features helps gradient descent because it
A) removes all noise  B) reduces the number of parameters  C) guarantees zero training error  D) makes the loss surface better conditioned so one learning rate suits all directions

**5.** Compared with ridge, the lasso penalty
A) can set weights exactly to zero  B) never shrinks weights  C) is always faster to compute  D) cannot be used with regression

**6.** For softmax with cross-entropy, the gradient of the loss with respect to the logits is
A) y - z  B) p²  C) p - y (probabilities minus the one-hot label)  D) log p

**7.** An ROC AUC of 0.5 means the classifier
A) is perfect  B) ranks no better than chance  C) is always wrong  D) has 50 percent precision

**8.** The Gini impurity of a pure node is
A) 0  B) 0.5  C) 1  D) undefined

**9.** A random forest decorrelates its trees by
A) pruning all trees  B) using one deep tree  C) training on test data  D) bootstrap sampling and random feature subsets at each split

**10.** Gradient boosting builds trees
A) independently and averages them  B) at random  C) sequentially, each fitting the errors (negative gradient) of the ensemble so far  D) only on the test set

**11.** k-means++ initialization is intended to
A) choose k automatically  B) spread out the initial centroids to avoid poor local optima  C) guarantee the global optimum  D) remove outliers

**12.** When using PCA before a classifier, the PCA should be fitted on
A) the training data only  B) the test data  C) the whole dataset  D) the labels

**13.** A "dead" ReLU unit is one that
A) has weights equal to one  B) has a large positive output  C) is used in the output layer  D) outputs zero for essentially all inputs, so it receives no gradient

**14.** He initialization is designed for
A) sigmoid units  B) linear regression  C) ReLU units  D) k-means

**15.** Stacking many sigmoid layers causes vanishing gradients mainly because
A) the weights are too large  B) the sigmoid derivative is at most 0.25, so products shrink exponentially  C) there is no bias  D) the loss is not differentiable

**16.** The Adam optimizer combines
A) momentum-like first moments with per-parameter scaling by second moments  B) random restarts with pruning  C) bagging with boosting  D) PCA with SGD

**17.** Batch normalization normalizes each feature
A) over the whole training set once  B) across the layers  C) over the labels  D) over the current mini-batch, followed by a learned scale and shift

**18.** At test time, dropout
A) randomly zeroes units again  B) doubles the weights  C) uses all units (with the training-time scaling convention already accounted for)  D) is replaced by L1

**19.** Scaled dot-product attention computes
A) argmax(QKᵀ) V  B) softmax(QKᵀ/√d_k) V  C) QKᵀ + V  D) ReLU(QV)

**20.** When the relationship P(y | x) changes over time (for example fraud tactics evolve) this is called
A) concept drift  B) covariate invariance  C) overfitting  D) regularization

## Section B: Short Questions (40 marks)

**B1. Error decomposition (5 marks)** A model has squared bias 0.09, variance 0.16 and the data have noise standard deviation 0.2. (a) Compute the expected squared error [2]. (b) The variance is cut by bagging to 0.05 at the cost of 0.01 extra bias². Is the ensemble better? [3]

**B2. Base rate (5 marks)** A test for a rare condition has sensitivity 0.95 and false-positive rate 0.05; prevalence is 2 percent. Find P(condition | positive) and interpret it.

**B3. Information gain (5 marks)** A node has 12 positive and 4 negative examples. A split sends (10 pos, 1 neg) to the left child and (2 pos, 3 neg) to the right. Compute the entropy of the parent and children and the information gain.

**B4. AUC (5 marks)** Labels (1, 0, 1, 0, 1, 0) and scores (0.8, 0.6, 0.55, 0.4, 0.35, 0.1). Compute the AUC by counting positive-negative pairs, and say what it means.

**B5. k-means step (5 marks)** Points (0,0), (0,2), (4,0), (4,2), (5,1) with initial centroids (0,0) and (4,0). Perform one assignment and update step.

**B6. Softmax (5 marks)** Logits z = (2, 0.5, -1). Compute the probabilities and the cross-entropy loss when the true class is 0 and when it is 1.

**B7. Learning rate (5 marks)** Minimize f(w) = w² from w = 3 by gradient descent. Give the first three iterates for η = 0.25. What happens for η = 1 and for η = 1.5?

**B8. A small CNN (5 marks)** A 28×28 grayscale image passes through a 5×5 convolution (1 → 8 channels, no padding, stride 1), a 2×2 max pool with stride 2, then flatten and a dense layer to 10 outputs. Give the shape after each stage and the parameter count of the convolution and the dense layer.

## Section C: Long Questions (answer any four, 40 marks)

**C1. Regression (10 marks)** Data (x, y): (1, 1.2), (2, 1.9), (3, 3.2), (4, 3.8), (5, 5.1), (6, 5.9). (a) Write XᵀX and Xᵀy for ŷ = b + w x [2]. (b) Find b and w [3]. (c) Compute the residuals, MSE and R² [3]. (d) Predict y at x = 7 and compute the standard error of the slope and its t-statistic, using s² = SS_res/(n - 2) [2].

**C2. Logistic regression and decision costs (10 marks)** (a) A one-feature logistic model is trained on x = (-2, -1, 1, 2) with labels (0, 1, 0, 1), starting from w = b = 0. Find the loss and the gradient [3]. (b) Perform one update with η = 1 and compute the new probabilities and loss [3]. (c) A screening system has three operating thresholds on 1,000 cases containing 50 true positives. At the low threshold TP = 40 and FP = 60; at the middle TP = 30 and FP = 20; at the high TP = 20 and FP = 5. A missed positive costs 100 and a false alarm costs 5. Compute the total cost and the precision and recall at each threshold and recommend one [4].

**C3. Backpropagation (10 marks)** A network has two inputs, two tanh hidden units and a linear output with squared loss L = ½(o - t)². W₁ = [[0.2, -0.1], [0.4, 0.3]], b₁ = (0, 0.1), W₂ = (1, -1), b₂ = 0.2. The input is x = (1, 2) and the target t = 0.5. (a) Perform the forward pass and compute the loss [3]. (b) Compute all gradients ∂L/∂W₂, ∂L/∂b₂, ∂L/∂W₁, ∂L/∂b₁ [5]. (c) Apply one step with η = 0.1 and give the new output and loss [2].

**C4. PCA and compression (10 marks)** Data (1,1), (2,3), (3,2), (4,4). (a) Compute the mean and the sample covariance matrix [3]. (b) Find the eigenvalues and the principal directions [3]. (c) Give the proportion of variance explained by the first component and the 1D scores of the four points [2]. (d) What is the total squared reconstruction error if only the first component is kept? [2]

**C5. System design and deployment (10 marks)** You must deploy a 7-million-parameter vision model on a battery-powered camera. (a) Give its float32 and int8 sizes [2]. (b) Training uses 50,000 images, batch size 128 and 30 epochs. How many iterations per epoch and in total? [2] (c) Describe a sound train/validation/test strategy if the data are video frames from 20 different cameras and the model will be deployed on new cameras [3]. (d) Outline a monitoring plan after deployment, including how you detect drift and what triggers retraining [3].

## Answer key and mark scheme

### Section A
1. B 2. C 3. A 4. D 5. A 6. C 7. B 8. A 9. D 10. C 11. B 12. A 13. D 14. C 15. B 16. A 17. D 18. C 19. B 20. A

### Section B

**B1.** (a) 0.09 + 0.16 + 0.2² = 0.09 + 0.16 + 0.04 = **0.29** [2]. (b) New error = 0.10 + 0.05 + 0.04 = **0.19** < 0.29, so the ensemble is **better**: the variance reduction outweighs the small bias increase [3].

**B2.** P = (0.95)(0.02)/[(0.95)(0.02) + (0.05)(0.98)] = 0.019/(0.019 + 0.049) = **0.279** [3]. Only about 28 percent of positives are true cases because the condition is rare; a positive result should lead to a confirmatory test, and the base rate must be considered when judging screening accuracy [2].

**B3.** Parent: p = 12/16 = 0.75, H = -(0.75 log₂ 0.75 + 0.25 log₂ 0.25) = **0.811** [1]. Left (10, 1): H = **0.439**; right (2, 3): H = **0.971** [2]. Weighted child entropy = (11/16)(0.439) + (5/16)(0.971) = 0.302 + 0.303 = 0.605. **Information gain = 0.811 - 0.605 = 0.206** [2].

**B4.** Positives score 0.8, 0.55, 0.35; negatives 0.6, 0.4, 0.1. Of 9 pairs: 0.8 beats all three negatives (3); 0.55 beats 0.4 and 0.1 but not 0.6 (2); 0.35 beats 0.1 only (1). Correct pairs = 6, **AUC = 6/9 = 0.667** [4]. It is the probability that a random positive receives a higher score than a random negative [1].

**B5.** Squared distances to (0,0) and (4,0): (0,0): 0, 16 → A; (0,2): 4, 20 → A; (4,0): 16, 0 → B; (4,2): 20, 4 → B; (5,1): 26, 2 → B [3]. New centroids: A = (0, 1); B = ((4 + 4 + 5)/3, (0 + 2 + 1)/3) = **(4.333, 1)** [2].

**B6.** e² = 7.389, e^0.5 = 1.649, e^-1 = 0.368; sum = 9.406. p = **(0.7856, 0.1753, 0.0391)** [3]. Loss for true class 0: -ln 0.7856 = **0.241**; for true class 1: -ln 0.1753 = **1.741** [2].

**B7.** Update w ← w(1 - 2η). For η = 0.25: **1.5, 0.75, 0.375** (halving each step: convergent) [3]. For η = 1: w ← -w, so 3 → -3 → 3 → -3: it **oscillates forever without converging**. For η = 1.5: w ← -2w, giving -6, 12, -24: it **diverges** [2].

**B8.** Input 28×28×1 → conv: **24×24×8**, parameters 5×5×1×8 + 8 = **208** [2]. Pool 2×2 stride 2 → **12×12×8** [1]. Flatten → **1,152** values. Dense to 10: 1,152 × 10 + 10 = **11,530** parameters [2].

### Section C

**C1.**
(a) XᵀX = [[6, 21], [21, 91]], Xᵀy = [21.1, 90.7] [2].
(b) x̄ = 3.5, ȳ = 3.5167; S_xx = 17.5 and S_xy = 16.85. **w = 16.85/17.5 = 0.963**, **b = 3.5167 - 0.9629 × 3.5 = 0.147** [3].
(c) Fitted: 1.110, 2.073, 3.036, 3.999, 4.961, 5.924. Residuals: **0.090, -0.172, 0.165, -0.198, 0.139, -0.024** (sum 0). SS_res = 0.1242, **MSE = 0.0207**. SS_tot = Σ(y - 3.5167)² = 16.348; **R² = 1 - 0.1242/16.348 = 0.992** [3].
(d) ŷ(7) = 0.147 + 6.740 = **6.887**. s² = 0.1242/4 = 0.03105; SE(w) = √(0.03105/17.5) = **0.0421**; t = 0.963/0.0421 = **22.9**, so the slope is highly significant [2].

**C2.**
(a) At w = b = 0 all probabilities are 0.5, loss = **ln 2 = 0.693** (also check: -ln 0.5 for each example). Gradient: ∂J/∂w = (1/4) Σ (p - y) x = (1/4)[(0.5)(-2) + (-0.5)(-1) + (0.5)(1) + (-0.5)(2)] = (1/4)(-1 + 0.5 + 0.5 - 1) = **-0.25**; ∂J/∂b = (1/4)(0.5 - 0.5 + 0.5 - 0.5) = **0** [3].
(b) w = 0, b = 0 → w = 0 + 1 × 0.25 = **0.25**, b = 0. Probabilities σ(0.25x): **0.3775, 0.4378, 0.5622, 0.6225**. Loss = (1/4)[-ln(1 - 0.3775) - ln 0.4378 - ln(1 - 0.5622) - ln 0.6225] = (1/4)(0.474 + 0.826 + 0.826 + 0.474) = **0.650** [3].
(c) Cost = 100 FN + 5 FP. Low: FN = 10, FP = 60 → 1000 + 300 = **1300**; precision 40/100 = 0.40, recall 40/50 = 0.80. Middle: FN = 20, FP = 20 → 2000 + 100 = **2100**; precision 0.60, recall 0.60. High: FN = 30, FP = 5 → 3000 + 25 = **3025**; precision 0.80, recall 0.40. **Recommend the low threshold** (lowest cost 1300): missing a positive is 20 times more costly than a false alarm, so high recall is worth the extra false alarms [4].

**C3.**
(a) Hidden pre-activations: unit 1: 0.2(1) - 0.1(2) + 0 = **0**; unit 2: 0.4(1) + 0.3(2) + 0.1 = **1.1**. Hidden outputs h = (tanh 0, tanh 1.1) = **(0, 0.8005)**. Output o = 1(0) - 1(0.8005) + 0.2 = **-0.6005**. Loss = ½(-0.6005 - 0.5)² = **0.6055** [3].
(b) δ_o = o - t = **-1.1005**. ∂L/∂W₂ = δ_o h = **(0, -0.8809)**; ∂L/∂b₂ = **-1.1005**. Hidden deltas: δ_h = δ_o W₂ ⊙ (1 - h²) = (-1.1005 × 1 × 1, -1.1005 × -1 × (1 - 0.6408)) = **(-1.1005, 0.3953)**. ∂L/∂W₁ = δ_h xᵀ = **[[-1.1005, -2.2010], [0.3953, 0.7906]]**; ∂L/∂b₁ = **(-1.1005, 0.3953)** [5].
(c) With η = 0.1 the new parameters give o = **0.2524** and loss **0.0307**: a large decrease from 0.6055 [2].

**C4.**
(a) Mean = (2.5, 2.5). Centered points: (-1.5, -1.5), (-0.5, 0.5), (0.5, -0.5), (1.5, 1.5). Covariance (divide by n - 1 = 3): variances 5/3 = **1.667**, covariance 4/3 = **1.333**: C = [[1.667, 1.333], [1.333, 1.667]] [3].
(b) Eigenvalues 1.667 ± 1.333 = **3.0 and 0.333**; directions (1, 1)/√2 and (-1, 1)/√2 [3].
(c) Explained by the first component: 3/3.333 = **0.90** (90 percent). Scores: (-1.5)(0.7071) × 2 = **-2.121, 0, 0, 2.121** [2].
(d) The discarded component has scores (0, 0.707, -0.707, 0), whose squares sum to **1.0** (equal to λ₂ × (n - 1) = 0.333 × 3) [2].

**C5.**
(a) float32: 7×10⁶ × 4 bytes = **28 MB**; int8: **7 MB** (4× smaller; quantization-aware training reduces any accuracy loss) [2].
(b) 50,000/128 = 390.6, so **391 iterations per epoch** (the last batch is smaller), and 30 × 391 = **11,730 iterations** in total [2].
(c) Frames from the same video are highly correlated, so a random frame split leaks information. Split **by camera** (for example 14 cameras for training, 3 for validation, 3 for testing; or cross-validate leaving cameras out) so that the test cameras mimic new, unseen deployment conditions; keep the test cameras untouched until the end; fit all normalization on the training cameras only [3].
(d) Log input statistics (brightness, resolution, class frequencies) and compare them with the training distribution (population stability index, KS test) to detect data drift; track the prediction distribution and confidence; collect a sample of labelled field data to measure accuracy and per-camera or per-subgroup error rates; monitor latency, power and memory. Trigger an alert and retrain or fine-tune when drift or measured accuracy crosses a preset threshold, validate the new model on held-out cameras, then roll out gradually with the ability to roll back [3].
