import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getIsLoggedIn,
  deleteUserAsync,
  signUpAsync,
} from "./userAccountSlice";
import MenuView from "./menuView";
import { setSelectedList, getLatestMealPlanPromise } from "../store/menumaticServerAPISlice";
import {
  getMenuStateBase,
  getMenuStateLogin,
  getMenuStateSignup,
  getMenuStateSettings,
  getMenuStateFilter,
  getMenuStatePassChange,
  getMenuStateRecommendBtn,
  getMenuStateRecommendDialog,
  setStateBase,
  setStateLogin,
  setStateSignup,
  setStateSettings,
  setStateFilter,
  setStatePassChange,
  setStateRecommendBtn,
} from "./menuSlice";

import { sortLikedDishes } from "../recommendation_page/recommendationPageSlice";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

import {
  getExcludeTags,
  getIncludeTags,
  getMealsInPlan,
  saveTags,
} from "./filterPageSlice";
import { deleteUser } from "../integration/menumaticServerThunks";
import { getLikesCounter, resetLikesCounter } from "../homepage/homePageSlice";

const MenuPresenter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data:latestMeal, state:latestMealState} = useSelector(getLatestMealPlanPromise);

  const navigateToPlanList = () => {
    navigate("/plan_list");
  };

  const navigateToPlan = () =>{
    if(latestMealState === "ready" && Object.keys(latestMeal).length > 0){
    dispatch(setSelectedList({ id: latestMeal.id }));
    navigate("/plan");}
    else{
      alert("You have no meal plan yet")
    }
  }

  const navigateToRecommendation = () => {
    dispatch(sortLikedDishes(mealsInPlan));
    navigate("/recommendation");
    dispatch(hideRecommendBtn);
    dispatch(resetLikesCounter())
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  const stateBase = useSelector(getMenuStateBase);
  const stateLogin = useSelector(getMenuStateLogin);
  const stateSignup = useSelector(getMenuStateSignup);
  const stateSettings = useSelector(getMenuStateSettings);
  const stateFilter = useSelector(getMenuStateFilter);
  const statePassChange = useSelector(getMenuStatePassChange);
  const stateRecommendBtn = useSelector(getMenuStateRecommendBtn);
  const stateRecommendDialog = useSelector(getMenuStateRecommendDialog);

  const showMenu = () => {
    dispatch(setStateBase(true));
  };
  const showLogin = () => {
    dispatch(setStateLogin(true));
  };
  const showSignup = () => {
    dispatch(setStateSignup(true));
  };
  const showSettings = () => {
    dispatch(setStateSettings(true));
  };
  const showFilter = () => {
    dispatch(setStateFilter(true));
  };
  const showPassChange = () => {
    dispatch(setStatePassChange(true));
  };
  const showRecommendBtn = () => {
    dispatch(setStateRecommendBtn(true));
  };
  const showRecommendDialog = () => {
    dispatch(setStateRecommendBtn(true));
  };

  const hideMenu = () => {
    dispatch(setStateBase(false));
  };
  const hideLogin = () => {
    dispatch(setStateLogin(false));
  };
  const hideSignup = () => {
    dispatch(setStateSignup(false));
  };
  const hideSettings = () => {
    dispatch(setStateSettings(false));
  };
  const hideFilter = () => {
    dispatch(setStateFilter(false));
  };
  const hidePassChange = () => {
    dispatch(setStatePassChange(false));
  };
  const hideRecommendBtn = () => {
    dispatch(setStateRecommendBtn(false));
  };
  const hideRecommendDialog = () => {
    dispatch(setStateRecommendBtn(false));
  };

  //**************LOG IN STUFF**************
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignOutACB = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // window.location.reload();
      })
      .catch((err) => {});
  };
  const handleSignInACB = async (credentials) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Incorrect username or password");
    }
  };

  const handleDeleteAccount = async (props) => {
    await dispatch(deleteUser({ userId: auth.currentUser.uid }));
    await dispatch(deleteUserAsync({ email: props.email, password: props.password }));
    setStateLogin(false);
    navigate("/");
  };

  const handlePasswordReset = async (props) => {
    sendPasswordResetEmail(auth, props.email)
      .then(() => {
        // Password reset email sent!
        alert("Password reset email sent to " + props.email);
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //*************SIGN UP STUFF*************

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpAsync({ email, password }));
    setEmail("");
    setPassword("");
  };

  //************FILTER STUFF************

  const mealsInPlan = useSelector(getMealsInPlan);

  const storedExcludeTags = useSelector(getExcludeTags);
  const storedIncludeTags = useSelector(getIncludeTags);

  const handleApplyFilter = (includeTags, excludeTags, mealsInPlan) => {
    dispatch(
      saveTags({
        includeTags: includeTags,
        excludeTags: excludeTags,
        mealsInPlan: mealsInPlan,
      })
    );
    navigate("/");
  };

  const handleCancel = () => {};

  return (
    <MenuView
      navigateToPlanList={navigateToPlanList}
      navigateToRecommendation={navigateToRecommendation}
      navigateToPlan={navigateToPlan}
      isLoggedIn={isLoggedIn}
      stateBase={stateBase}
      stateLogin={stateLogin}
      stateSignup={stateSignup}
      stateSettings={stateSettings}
      stateFilter={stateFilter}
      statePassChange={statePassChange}
      stateRecommendBtn={stateRecommendBtn}
      stateRecommendDialog={stateRecommendDialog}
      showMenu={showMenu}
      showLogin={showLogin}
      showSignup={showSignup}
      showSettings={showSettings}
      showFilter={showFilter}
      showPassChange={showPassChange}
      showRecommendBtn={showRecommendBtn}
      showRecommendDialog={showRecommendDialog}
      hideMenu={hideMenu}
      hideLogin={hideLogin}
      hideSignup={hideSignup}
      hideSettings={hideSettings}
      hideFilter={hideFilter}
      hidePassChange={hidePassChange}
      hideRecommendBtn={hideRecommendBtn}
      hideRecommendDialog={hideRecommendDialog}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signIn={handleSignInACB}
      signOut={handleSignOutACB}
      deleteAccount={handleDeleteAccount}
      resetPassword={handlePasswordReset}
      signUp={handleSignUp}
      applyFilter={handleApplyFilter}
      cancel={handleCancel}
      storedExcludeTags={storedExcludeTags}
      storedIncludeTags={storedIncludeTags}
      mealsInPlan={mealsInPlan}
    />
  );
};

export default MenuPresenter;
