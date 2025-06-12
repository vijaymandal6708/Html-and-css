#include<iostream>
using namespace std;
int main()
{
  int amount;
  cout<<"Enter your purchase amount:";
  cin>>amount;

  if(amount>=0 && amount<=1000){
    cout<<endl<<"Your have zero discout";
    cout<<endl<<"Your final amount is:"<<amount;
  }
  else if(amount>1000 && amount<=3000){
    cout<<endl<<"Your discount is:"<<amount*0.1;
    cout<<endl<<"Your final amount is:"<<amount*0.9;
  }
  else if(amount>3000 && amount<=5000){
    cout<<endl<<"Your discount is:"<<amount*0.15;
    cout<<endl<<"Your final amount is:"<<amount*0.85;
  }
  else if(amount>5000){
    cout<<endl<<"Your discount is:"<<amount*0.2;
    cout<<endl<<"Your final amount is:"<<amount*0.8;
  }
  else{
    cout<<"Invalid Input";
  }

return 0;
}