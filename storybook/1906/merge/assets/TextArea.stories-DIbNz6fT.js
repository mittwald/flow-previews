import{j as r,r as F}from"./iframe-B9oS1eAm.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-4NarTcNc.js";import{L as o}from"./Label-IJFVFDuP.js";import{B as c}from"./Button-DYAI_N0q.js";import{S as g}from"./Section-BlZng62t.js";import{A as b}from"./ActionGroup-C8kGbhyk.js";import{s as u}from"./Action-uBGtkJG1.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CRDffjbv.js";import{F as S}from"./FieldError-BkKW3wP7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5cDPq7G.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./useRef-D23fJLYr.js";import"./utils-CkbQ6lDO.js";import"./ButtonView-BFgeb-7u.js";import"./browser-DuZ3LDHb.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Text-D9DZPtYx.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./LoadingSpinner-BCe3g54S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./ContextMenuSection-B77fxBO-.js";import"./Dialog-DQxs1UCg.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./VisuallyHidden-D5FMvG_d.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./useStatic-D0W9io-P.js";import"./context-CJJiwCXZ.js";import"./TextFieldBase-ncrY9QWJ.js";import"./FieldDescription-OkIQBqxg.js";import"./useFieldComponent-BBgwgWHq.js";import"./TextField-CgbI6ZAs.js";import"./FieldError-Dfuql1HI.js";import"./Form-DFtxLsB8.js";import"./Group-DvDunJNi.js";import"./Input-eUUGTdC3.js";import"./useTextField-CpCpLcdr.js";import"./useFormReset-CfNbS0Tm.js";import"./useFormValidation-pe71fieX.js";import"./useControlledHostValueProps-DrCLF4RV.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
