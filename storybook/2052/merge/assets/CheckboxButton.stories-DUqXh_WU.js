import{j as r,r as y}from"./iframe-CBVsO-nV.js";import{a,u as c,F as u,t as g}from"./Form-CMN9qLLC.js";import{B as i}from"./Button-CsBApO8I.js";import{S as k}from"./Section-B5x6AEB8.js";import{A as O}from"./ActionGroup-BWlbeHnL.js";import{s as l}from"./Action-D49cMU0u.js";import{T as m}from"./Text-4FHUoZpl.js";import{C as d}from"./CheckboxButton-D_8KCpzD.js";import{C as p}from"./Content-D1CA9KQC.js";import{F as _}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BYVfnYfe.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./utils-BP7SriO_.js";import"./ProgressBar-I-zazMLu.js";import"./Label-Bbbf1klh.js";import"./Hidden-CLTlUYi-.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./Text-GjNUVhom.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Checkbox-ltzv9yR7.js";import"./useMakeFocusable-D1yavyON.js";import"./Form-CSBASJMX.js";import"./useFormValidation-DWnxi1QZ.js";import"./useToggleState-DPC5joeI.js";import"./useFormReset-0NTNnrBe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Gr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async S=>{await l(1500),q(S)},o=c({defaultValues:{acceptTerms:!1}}),T=g();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(k,{children:[r.jsx(T,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(O,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,x,f;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=e.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,C,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var b,E,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(B=(E=s.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
