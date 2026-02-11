import{r as F,j as r}from"./iframe-lphi5Fln.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-BQBpjzpk.js";import{L as o}from"./Label-CqftOgdQ.js";import{B as c}from"./Button-Luzxnqg_.js";import{S as g}from"./Section-C4YcVKXh.js";import{A as b}from"./ActionGroup-B4BBpMWh.js";import{s as u}from"./Action-DdOAmdm4.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DYylYVO_.js";import{F as S}from"./FieldError-CHFlSzPg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dz56l0zD.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./context-hul-JKEa.js";import"./useRef-jLzozQB2.js";import"./utils-Is-sFETw.js";import"./ButtonView-Cs6C0-sY.js";import"./browser-DxP0Rs6D.js";import"./Label.module-CUYTf9Jc.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Text-DhRxTRp1.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBLw-vMJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByR9A8gc.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocusable-CWG73OOy.js";import"./ContextMenuSection-WR0YVO70.js";import"./Dialog-any5Q92a.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./VisuallyHidden-DjAmLvSg.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./useStatic-DoydbngC.js";import"./context-D_Cvxd07.js";import"./useFieldComponent-6mmayeW0.js";import"./useControlledHostValueProps-BjCXTivP.js";import"./FieldDescription-CbFWtu2W.js";import"./TextField-DUKlMQEe.js";import"./FieldError-nA_6I3J3.js";import"./Form-BQ7FIPf4.js";import"./Group-Co1kbRjJ.js";import"./Input-CYD73VvK.js";import"./useTextField-BUGG9crO.js";import"./useFormReset-CSRdRe02.js";import"./useFormValidation-fTAeqOxz.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
