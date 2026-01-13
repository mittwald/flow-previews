import{j as r,r as F}from"./iframe-CF9WEugj.js";import{b as n,u as p,F as a,t as S}from"./Form-C2xECtRP.js";import{R as u,S as l}from"./ResetButton-C4TFIVqG.js";import{B as d}from"./Button-Dt7_Feft.js";import{S as x}from"./Section-z4bbW8IF.js";import{A as E}from"./ActionGroup-C2mwfdOU.js";import{s as c}from"./Action-DBGOtx5u.js";import{S as m}from"./Switch-OpasMww3.js";import{F as j}from"./FieldError-D4UoR9vC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DQFpeFdM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./clsx-B-dksMZM.js";import"./index-DHfgQlLW.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./browser-CV2qUG2E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B4BZttt0.js";import"./useRef-DR4WDFp0.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./ContextMenuSection-ChhzEL-I.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./useStatic-De5kLziu.js";import"./context-Dm_RzWW0.js";import"./useFieldComponent-B3P2g6wY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DWZRhZpT.js";import"./useFormReset-w9h9-zRZ.js";import"./FieldError-BfE9I5LY.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,Wr as default};
