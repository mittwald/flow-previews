import{j as r,r as F}from"./iframe-B_VLmVOf.js";import{b as p,u as d,F as l,t as j}from"./Form-CYwbn_Ej.js";import{L as o}from"./Label-f9h1IAZy.js";import{R as h,S as x}from"./ResetButton-CT-MbADY.js";import{B as c}from"./Button-Bx9uZJMk.js";import{S as g}from"./Section-C8rH5F8Y.js";import{A as b}from"./ActionGroup-BpNSiWp6.js";import{s as u}from"./Action-Ct3jXlr4.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-U59q3V4E.js";import{F as S}from"./FieldError-Daf8utl3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BPLgH_zA.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./clsx-B-dksMZM.js";import"./index-Cpfd6Pim.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./context-x63-ahNn.js";import"./browser-BI-ei-gA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BcEUcVG2.js";import"./utils-C3gFrn3p.js";import"./Hidden-BDeD6EhR.js";import"./useRef-ktlGpVd-.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./LoadingSpinner-8NlAwzA_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./ContextMenuSection-Bn3YLQv6.js";import"./Dialog-B23HRyeo.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./useControlledState-Cy2UyDQ-.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./VisuallyHidden-neYV3Owd.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./useStatic-Ch5ZGK2l.js";import"./context-DKzx1USb.js";import"./TextFieldBase-BE_Z1OP5.js";import"./FieldDescription-BbTUQEDp.js";import"./useFieldComponent-CG-gR-7X.js";import"./TextField-DZdOAXTp.js";import"./FieldError-DsHbeww2.js";import"./Form-Bzu1lHbY.js";import"./Group-B7avKtg4.js";import"./Input-CDIp8Otf.js";import"./useTextField-B1qLDQLP.js";import"./useFormReset-DzSH81mS.js";import"./useFormValidation-BmcsTB_W.js";import"./useControlledHostValueProps-DAUFWDQs.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Nr as __namedExportsOrder,Kr as default};
