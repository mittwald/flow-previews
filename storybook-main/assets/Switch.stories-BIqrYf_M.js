import{r as F,j as r}from"./iframe-D8EpHgnQ.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-Bdqeh-7e.js";import{B as d}from"./Button-v3XDTDQm.js";import{S as x}from"./Section-B4kWzSE_.js";import{A as E}from"./ActionGroup-C8Sp28d_.js";import{s as c}from"./Action-Bqe5nSI1.js";import{S as m}from"./Switch-Cw8-26Pv.js";import{F as j}from"./FieldError-WVs7H0vD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBeHUKte.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./useRef-gITyoAnd.js";import"./utils-DUD9ssEU.js";import"./ButtonView-CR_WR_Xo.js";import"./browser-CYlhW0g_.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./Text-Dkvkf5JK.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Text-BH6HQaIi.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./ContextMenuSection-Bk-U6hYN.js";import"./Dialog-CkEWxlO6.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./VisuallyHidden-maxPxeqi.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./useStatic-BaYU_ZGV.js";import"./context-CfNS10y1.js";import"./useFieldComponent-gPWDO_C1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5_w_6aq.js";import"./useFormReset-DtPxpP1_.js";import"./FieldError-EP30ks0X.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
