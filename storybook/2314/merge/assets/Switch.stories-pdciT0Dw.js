import{r as F,j as r}from"./iframe-lphi5Fln.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-BQBpjzpk.js";import{B as d}from"./Button-Luzxnqg_.js";import{S as x}from"./Section-C4YcVKXh.js";import{A as E}from"./ActionGroup-B4BBpMWh.js";import{s as c}from"./Action-DdOAmdm4.js";import{S as m}from"./Switch-5q9ImdFK.js";import{F as j}from"./FieldError-CHFlSzPg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dz56l0zD.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./context-hul-JKEa.js";import"./useRef-jLzozQB2.js";import"./utils-Is-sFETw.js";import"./ButtonView-Cs6C0-sY.js";import"./browser-DxP0Rs6D.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Text-DhRxTRp1.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBLw-vMJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByR9A8gc.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocusable-CWG73OOy.js";import"./ContextMenuSection-WR0YVO70.js";import"./Dialog-any5Q92a.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./VisuallyHidden-DjAmLvSg.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./useStatic-DoydbngC.js";import"./context-D_Cvxd07.js";import"./useFieldComponent-6mmayeW0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cf5C5cId.js";import"./useFormReset-CSRdRe02.js";import"./FieldError-nA_6I3J3.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
