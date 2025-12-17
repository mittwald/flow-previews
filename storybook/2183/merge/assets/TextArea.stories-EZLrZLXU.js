import{j as r,r as F}from"./iframe-BrERPjH0.js";import{u as p,F as d}from"./Form-Ac1Oeg88.js";import{L as o}from"./Label-CrwXzsx_.js";import{F as l,t as j}from"./Field-BqYTgjZG.js";import{B as c}from"./Button-BwrtrMsn.js";import{S as g}from"./Section-B3CMEqO8.js";import{A as b}from"./ActionGroup-1iai0086.js";import{s as u}from"./Action-ChQTmQoz.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CpqQXNPy.js";import{F as S}from"./FieldError-H2u6oDij.js";import{R as h}from"./ResetButton-A6e9JqB9.js";import{S as x}from"./SubmitButton-CrVj9caF.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-YFSmfPOL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./index-DzMVKTvo.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./Label-D4vlL-gU.js";import"./utils-DSRl4UW4.js";import"./Hidden-BAsL4qfb.js";import"./dynamic-D7aVmIf6.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./Text-Bge3UWaD.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DaDxLfby.js";import"./ProgressBar-DcK7zEgl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./ContextMenuSection-J2h9Z88g.js";import"./lib-90ocxLs-.js";import"./Dialog-ByWgeyFx.js";import"./RSPContexts-BfqcGdFg.js";import"./OverlayArrow-gzfZyYcK.js";import"./useControlledState-C9HQthZh.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./SelectionManager-BZAXigYb.js";import"./useEvent-CWpAuNO7.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./getActionGroupSlot-BcecKfQ6.js";import"./useStatic-DyRcj1Uc.js";import"./context-kHaIXrog.js";import"./TextFieldBase-Cd5uGALe.js";import"./FieldDescription-6rmHkF1O.js";import"./useFieldComponent-WOZCxk1N.js";import"./TextField-B3yTMFEr.js";import"./FieldError-DI8l-yzx.js";import"./Form-CRLN4oBl.js";import"./Group-D-Zc97xh.js";import"./Input-D0yPZXTG.js";import"./useTextField-BeG6791T.js";import"./useFormReset-Bw5L0YJo.js";import"./useFormValidation-sc5NnAzh.js";import"./useControlledHostValueProps-cnkiYDDE.js";import"./IconDanger-CeY6S6MU.js";import"./useRef-ohG7iErY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Qr as __namedExportsOrder,Jr as default};
