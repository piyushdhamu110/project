#include <iostream>
#include <queue>
using namespace std;

// Structure for a binary tree node
struct btree
{
    int data;
    struct btree *left, *right;
};

// Function to create a new tree node
struct btree *newNode(int data)
{
    struct btree *temp = new btree;
    temp->data = data;
    temp->left = temp->right = NULL;
    return temp;
}

// Breadth-First Search traversal algorithm
void BFS(struct btree *root)
{
    if (root == NULL)
        return;

    // Create a queue for BFS
    queue<struct btree *> q;
    struct btree *dummy = newNode(-1); // Dummy node to mark end of level

    // Enqueue the root and dummy node
    q.push(root);
    q.push(dummy);

    // Loop until the queue is empty
    while (!q.empty())
    {
        struct btree *temp = q.front();
        q.pop();

        // If the dequeued node is not the dummy node
        if (temp != dummy)
        {
            cout << temp->data << " ";

            // Enqueue left and right children if they exist
            if (temp->left != NULL)
                q.push(temp->left);
            if (temp->right != NULL)
                q.push(temp->right);
        }
        else
        {                   // If the dequeued node is the dummy node
            cout << "\n";   // Move to the next level
            if (!q.empty()) // Enqueue the dummy node for the next level if queue is not empty
                q.push(dummy);
        }
    }
}

// Driver code
int main()
{
    // Constructing the binary tree
    struct btree *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    // Perform BFS traversal
    cout << "Breadth-First Search traversal of binary tree is:\n";
    BFS(root);

    return 0;
}
