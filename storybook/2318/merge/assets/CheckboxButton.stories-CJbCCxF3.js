import{r as C,j as r}from"./iframe-D8EpHgnQ.js";import{a as p,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-Bdqeh-7e.js";import{B as l}from"./Button-v3XDTDQm.js";import{S as B}from"./Section-B4kWzSE_.js";import{A as b}from"./ActionGroup-C8Sp28d_.js";import{s as u}from"./Action-Bqe5nSI1.js";import{T as i}from"./Text-Dkvkf5JK.js";import{C as m}from"./CheckboxButton-CBMxGeFn.js";import{C as d}from"./Content-ShiL6duI.js";import{F as E}from"./FieldError-WVs7H0vD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBeHUKte.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./useRef-gITyoAnd.js";import"./utils-DUD9ssEU.js";import"./ButtonView-CR_WR_Xo.js";import"./browser-CYlhW0g_.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./ContextMenuSection-Bk-U6hYN.js";import"./Dialog-CkEWxlO6.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./Text-BH6HQaIi.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./VisuallyHidden-maxPxeqi.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./useStatic-BaYU_ZGV.js";import"./context-CfNS10y1.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Checkbox-DcYyKzv6.js";import"./useFieldComponent-gPWDO_C1.js";import"./FieldError-EP30ks0X.js";import"./Form-C9f2RCk6.js";import"./useFormValidation-CthS1N1f.js";import"./useToggleState-D5_w_6aq.js";import"./useFormReset-DtPxpP1_.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
