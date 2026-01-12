import{j as r,r as F}from"./iframe-DkC9HeFh.js";import{b as n,u as p,F as a,t as S}from"./Form-DFQtf3GU.js";import{R as u,S as l}from"./ResetButton-BQqEyyoX.js";import{B as d}from"./Button-B7ieOWfK.js";import{S as x}from"./Section-C5sab7e9.js";import{A as E}from"./ActionGroup-fpt_mN-q.js";import{s as c}from"./Action-BeqMUzE-.js";import{S as m}from"./Switch-BVD1oNrX.js";import{F as j}from"./FieldError-Dbnkzdo1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDaduNaQ.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./browser-tA6G_ksz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CQbe0cgS.js";import"./useRef-Bpt1Kr88.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./ContextMenuSection-nkrIclXc.js";import"./Dialog-BJyrAoE0.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./useStatic-8Ma0Gu-h.js";import"./context-Z29bubao.js";import"./useFieldComponent-eCPWR12U.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4UoN7sA.js";import"./useFormReset-BF2XnUgU.js";import"./FieldError-CNoEBaIo.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
