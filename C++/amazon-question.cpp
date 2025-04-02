#include<iostream>
using namespace std;
int main()
{
  string websitename;
  cout<<"Enter websitename:";
  cin>>websitename;

  if(websitename=="Amazon")
  {
    cout<<"Product or Service:";
    cin>>websitename;
    if(websitename=="Product")
    {
      cout<<"Shoes or Clothes:";
      cin>>websitename;
      if(websitename=="Shoes")
      {
        cout<<"1500";
      }
      else if(websitename=="Clothes")
      {
        cout<<"2500";
      }
      else{
        cout<<"Invalid Input";
      }
    }
    else if(websitename=="Service")
    {
      cout<<"Not Available";
    }
    else{
      cout<<"Inavalid";
    }
  }
  else{
    cout<<"Inavalid Input";
  }

return 0;
}