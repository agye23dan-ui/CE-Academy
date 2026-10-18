# Machine Learning and AI: Class Test

Duration: 60 minutes. Calculator allowed, no notes. Total: 60 marks. Section A: 20 multiple-choice questions (1 mark each). Section B: 4 problems (10 marks each). Useful values: σ(0) = 0.5, σ(0.625) = 0.6514, ln 2 = 0.693, log₂ values as needed.

## Section A: Multiple choice (20 marks)

**1.** Supervised learning requires
A) only unlabeled data  B) labeled examples (inputs with targets)  C) a reward signal  D) no data

**2.** A model with very low training error but high test error is
A) underfitting  B) well calibrated  C) overfitting  D) unbiased

**3.** The test set should be used
A) repeatedly to tune hyperparameters  B) once, to report final performance  C) for training  D) to initialize weights

**4.** The normal equations for least squares are
A) XᵀX w = Xᵀy  B) X w = y always  C) w = Xᵀy  D) XXᵀ = I

**5.** If the gradient descent learning rate is far too large, the loss typically
A) reaches zero at once  B) decreases smoothly  C) stays constant  D) oscillates or diverges

**6.** The ridge (L2) penalty is proportional to
A) the sum of the absolute weights  B) the sum of the squared weights  C) the number of nonzero weights  D) the largest weight

**7.** The lasso (L1) penalty tends to produce
A) larger weights  B) identical weights  C) sparse weights, some exactly zero  D) negative weights only

**8.** The sigmoid function σ(0) equals
A) 0  B) 0.5  C) 1  D) 0.25

**9.** The loss normally used to train logistic regression is
A) binary cross-entropy (log loss)  B) hinge loss only  C) the number of clusters  D) mean absolute percentage error

**10.** Precision is
A) TP/(TP + FN)  B) TN/(TN + FP)  C) TP/(TP + FP)  D) (TP + TN)/N

**11.** Recall (sensitivity) is
A) TP/(TP + FN)  B) TP/(TP + FP)  C) FP/(FP + TN)  D) 1 - accuracy

**12.** For a highly imbalanced classification task, a more informative summary than accuracy is
A) the number of features  B) the training time  C) the learning rate  D) precision, recall or the F1 score

**13.** k-nearest neighbours is sensitive to the scale of features, so you should
A) never normalize  B) standardize the features  C) use only one feature  D) use k = N

**14.** The entropy of a node with a 50/50 class split is
A) 0 bits  B) 0.5 bits  C) 1 bit  D) 2 bits

**15.** Bagging mainly reduces
A) variance  B) bias only  C) the number of training examples  D) the label noise

**16.** The k-means algorithm minimizes
A) the number of clusters  B) the within-cluster sum of squared distances  C) the between-cluster distance  D) the cross-entropy

**17.** The first principal component is
A) the feature with the largest mean  B) a random direction  C) the direction of smallest variance  D) the direction of maximum variance

**18.** ReLU(-3) equals
A) 0  B) -3  C) 3  D) 1

**19.** The outputs of a softmax layer
A) can be negative  B) are always integers  C) are positive and sum to 1  D) sum to the number of classes

**20.** Backpropagation computes gradients using
A) random search  B) the chain rule on the computation graph  C) the median of the data  D) finite differences only

## Section B: Problems (40 marks)

**B1. Linear regression (10 marks)** Data (x, y): (1, 2), (2, 4), (3, 5). (a) Find the least-squares line ŷ = b + w x [4]. (b) Compute the residuals, SS_res and R² [4]. (c) Find the ridge slope with λ = 2 penalizing only the slope [2].

**B2. Classification metrics (10 marks)** A classifier is tested on 200 cases and produces TP = 30, FP = 20, FN = 10, TN = 140. (a) Compute accuracy, precision, recall, specificity and F1 [6]. (b) After raising the decision threshold the counts become TP = 22, FP = 5, FN = 18, TN = 155. Compute the new precision, recall and accuracy, and describe the trade-off [4].

**B3. Backpropagation (10 marks)** A single sigmoid neuron has input x = 2, weight w = 0.5, bias b = -1 and target t = 1, with loss L = ½(a - t)². (a) Compute z, the output a and the loss [3]. (b) Compute ∂L/∂w and ∂L/∂b [4]. (c) Apply one gradient step with η = 1 and compute the new output and loss [3].

**B4. Convolution and model size (10 marks)** (a) An input of size 5×5 is convolved with a 3×3 kernel. Give the output size for (stride 1, padding 0), (stride 1, padding 1) and (stride 2, padding 0) [3]. (b) How many parameters has a 3×3 convolution layer from 16 to 32 channels with bias? A 5×5 layer from 3 to 8 channels? [3] (c) Explain two reasons why overfitting happens and give two remedies [4].

## Answer key and solutions

### Section A
1. B 2. C 3. B 4. A 5. D 6. B 7. C 8. B 9. A 10. C 11. A 12. D 13. B 14. C 15. A 16. B 17. D 18. A 19. C 20. B

### Section B

**B1.**
(a) Step 1: x̄ = 2, ȳ = 11/3 = 3.667.
Step 2: S_xy = (-1)(-1.667) + 0 + (1)(1.333) = 3; S_xx = 2.
Step 3: Slope **w = 1.5**, intercept b = 3.667 - 3 = **0.667**.
(b) Step 1: Fitted values 2.167, 3.667, 5.167; residuals **-0.167, 0.333, -0.167** (sum 0).
Step 2: SS_res = 0.0278 + 0.1111 + 0.0278 = **0.1667**.
Step 3: SS_tot = 2.778 + 0.111 + 1.778 = 4.667.
Step 4: **R² = 1 - 0.1667/4.667 = 0.964**.
(c) Slope = S_xy/(S_xx + λ) = 3/(2 + 2) = **0.75**, intercept = 3.667 - 0.75 × 2 = 2.167.

**B2.**
(a) Step 1: Accuracy = 170/200 = **0.85**.
Step 2: Precision = 30/50 = **0.60**.
Step 3: Recall = 30/40 = **0.75**.
Step 4: Specificity = 140/160 = **0.875**.
Step 5: F1 = 2(0.6)(0.75)/1.35 = **0.667**.
(b) Precision = 22/27 = **0.815**, recall = 22/40 = **0.55**, accuracy = 177/200 = **0.885**. Raising the threshold made the classifier more conservative: fewer false alarms (higher precision) but more missed positives (lower recall). The accuracy rose only because negatives dominate; the right threshold depends on the relative cost of false positives and false negatives.

**B3.**
(a) z = 0.5 × 2 - 1 = **0**; a = σ(0) = **0.5**; L = ½(0.5 - 1)² = **0.125**.
(b) ∂L/∂z = (a - t) a (1 - a) = (-0.5)(0.25) = -0.125. ∂L/∂w = -0.125 × x = **-0.25**; ∂L/∂b = **-0.125**.
(c) w = 0.5 + 0.25 = **0.75**, b = -1 + 0.125 = **-0.875**. New z = 1.5 - 0.875 = 0.625, a = σ(0.625) = **0.6514**, L = ½(0.3486)² = **0.0608**: the loss decreased.

**B4.**
(a) Output = ⌊(5 + 2p - 3)/s⌋ + 1: stride 1, padding 0 → **3×3**; stride 1, padding 1 → **5×5** ("same" size); stride 2, padding 0 → **2×2**.
(b) 3×3×16×32 + 32 = **4,640**; 5×5×3×8 + 8 = **608**.
(c) Overfitting happens when the model is too flexible for the amount of data and when the data are noisy or unrepresentative, so the model memorizes noise. Remedies: more data or augmentation, regularization (weight decay, dropout), early stopping, a simpler model, ensembling, cross-validated hyperparameter choice.
