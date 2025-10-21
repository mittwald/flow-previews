import{j as r,r as B}from"./iframe-CBVsO-nV.js";import{a,u as p,F as c,t as L}from"./Form-CMN9qLLC.js";import{L as s}from"./Label-nyljzuzS.js";import{B as m}from"./Button-CsBApO8I.js";import{S as O}from"./Section-B5x6AEB8.js";import{A as _}from"./ActionGroup-BWlbeHnL.js";import{s as d}from"./Action-D49cMU0u.js";import{S as n}from"./SearchField-BQOlZ0y6.js";import{F as w}from"./useFieldComponent-BL--pJL1.js";import"./index-Cun1SEai.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./clsx-B-dksMZM.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./browser-C8nzMZsV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bbbf1klh.js";import"./utils-BP7SriO_.js";import"./Hidden-CLTlUYi-.js";import"./IconWarning-BYVfnYfe.js";import"./Text-4FHUoZpl.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./LoadingSpinner-B8NSHT58.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4bPWs-y1.js";import"./ProgressBar-I-zazMLu.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-tISAzguc.js";import"./useFocus-DaXdFBHM.js";import"./useFocusRing-CMejcKZt.js";import"./useFocusable-BZqSTg_W.js";import"./ContextMenuSection-CKXjql2z.js";import"./Dialog-CSsaqFoB.js";import"./RSPContexts-DsHkjJhu.js";import"./OverlayArrow-D5IM8mFd.js";import"./useControlledState-CX82Bv9G.js";import"./Collection-D1Yf9Sy6.js";import"./CollectionBuilder-Dw4MtH9U.js";import"./SelectionIndicator-DFyYkHVA.js";import"./Separator-Cet5gXTt.js";import"./SelectionManager-BHGqi2o_.js";import"./useEvent-51-loX5F.js";import"./useCollator-CcT-BTV3.js";import"./FocusScope-B4rhd8wm.js";import"./VisuallyHidden-OgSsWZyt.js";import"./dynamic-B9g8bFyj.js";import"./getActionGroupSlot-Dv-xsI8W.js";import"./useStatic-B-RdiA9k.js";import"./context-BHCJLPq_.js";import"./ReactAriaControlledValueFix-DsZdc0Eu.js";import"./Form-CSBASJMX.js";import"./Group-Cz9MSlsI.js";import"./Input-Bo67AZIS.js";import"./useTextField-Dmd_cSub.js";import"./useFormReset-0NTNnrBe.js";import"./useFormValidation-DWnxi1QZ.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,v=q("submit"),Gr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const e=async g=>{await d(5e3),v(g)},E=p({defaultValues:{user:""}}),y=L();return r.jsx(c,{form:E,onSubmit:e,children:r.jsxs(O,{children:[r.jsx(y,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx(_,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},t={render:()=>{const e=p();return B.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(w,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var u,l,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var f,F,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var x,j,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
