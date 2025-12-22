import{j as r,r as F}from"./iframe-Dq6d4A4K.js";import{b as n,u as p,F as a,t as S}from"./Form-DZYuvmW-.js";import{R as u,S as l}from"./ResetButton-Dr3JPadG.js";import{B as d}from"./Button-CRlV5nO0.js";import{S as x}from"./Section-BosBEo7L.js";import{A as E}from"./ActionGroup-C7CI4xmc.js";import{s as c}from"./Action-BH5FUwcy.js";import{S as m}from"./Switch-CxzPrStY.js";import{F as j}from"./FieldError-3R6U5-ci.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ex2ST8.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./clsx-B-dksMZM.js";import"./index-cJyKvq7H.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./context-Dane2eIN.js";import"./browser-DRZjKHqy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-JgkAdQlm.js";import"./useRef-QuX6RRj2.js";import"./IconWarning-CufYr70B.js";import"./remote-9zlx4mlg.js";import"./Text-0vHLnm-v.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./LoadingSpinner-C8xohBci.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJxkILn0.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BTTZyaX9.js";import"./useFocus-CdRm64Xm.js";import"./useFocusRing-HiCcztDi.js";import"./useFocusable-SW4CEV0n.js";import"./ContextMenuSection-CAGjVTCl.js";import"./Dialog-D4b1JxJ9.js";import"./RSPContexts-CrxTMHNd.js";import"./OverlayArrow-CZpwCw1e.js";import"./useControlledState-B_V0UpKw.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./useStatic-qDMUdwgV.js";import"./context-Cu2JCu7X.js";import"./useFieldComponent-lf4P9InL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D9jY008e.js";import"./useFormReset-D6HDlpz3.js";import"./FieldError-DP91cGbX.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ar as default};
