#include<iostream>
using namespace std;
int main()
{

  int num,sum=0;
  cout<<"Enter how many natural numbers you want to print:";
  cin>>num;

  for(int i=0; i<num; i++)
  {
     sum=sum+i;
  }
  cout<<sum;

return 0;
}