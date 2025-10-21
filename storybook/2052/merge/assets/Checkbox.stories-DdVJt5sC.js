import{j as r,r as g}from"./iframe-CBVsO-nV.js";import{a as p,u as a,F as u,t as A}from"./Form-CMN9qLLC.js";import{B as n}from"./Button-CsBApO8I.js";import{S as B}from"./Section-B5x6AEB8.js";import{A as C}from"./ActionGroup-BWlbeHnL.js";import{s as d}from"./Action-D49cMU0u.js";import{C as o}from"./Checkbox-ltzv9yR7.js";import{F as k}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BYVfnYfe.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./utils-BP7SriO_.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./useMakeFocusable-D1yavyON.js";import"./Form-CSBASJMX.js";import"./useFormValidation-DWnxi1QZ.js";import"./useToggleState-DPC5joeI.js";import"./useFormReset-0NTNnrBe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),vr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const t=async y=>{await d(1500),T(y)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),c=A();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(c,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(C,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var l,f,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,F,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var b,E,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Ir as __namedExportsOrder,vr as default};
