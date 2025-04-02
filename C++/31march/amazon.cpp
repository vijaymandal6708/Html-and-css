#include<iostream>
using namespace std;
int main()
{
  string websitename;
  cout<<"Enter Website name:";
  cin>>websitename;

  if(websitename=="Amazon"){
    cout<<"Enter Product or Service:";
    cin>>websitename;
    if(websitename=="Product"){
      cout<<"Enter Shoes or Clothes:";
      cin>>websitename;
      if(websitename=="Shoes"){
        cout<<1000;
      }
      else if(websitename=="Clothes"){
        cout<<2000;
      }
      else{
        cout<<"Invalid Input";
      }
    }
    else if(websitename=="Service"){
      cout<<"Not Available";
    }
    else{
      cout<<"Invalid Input";
    }
  }
  else{
    cout<<"Invalid";
  }

return 0;
}