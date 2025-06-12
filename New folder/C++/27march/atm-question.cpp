#include<iostream>
using namespace std;
int main()
{
  int pin;
  cout<<"Enter a Pin:";
  cin>>pin;

  (pin==1234)? cout<<"Welcome":(cout<<"Wrong password enter again: ",cin>>pin,(pin==1234))? cout<<"Welcome":(cout<<"Wrong password enter again: ",cin>>pin,(pin==1234))?cout<<"Welcome":cout<<"Blocked";

  return 0;
}