import{j as r,r as F}from"./iframe-BsZhBXal.js";import{u as p,F as d}from"./Form-B7ghN0ur.js";import{L as o}from"./Label-XwOnxXzc.js";import{F as l,t as j}from"./Field-DLAz7mqq.js";import{B as c}from"./Button-Cxmuw7nD.js";import{S as g}from"./Section-4lXA4afp.js";import{A as b}from"./ActionGroup-Nx7KWa-a.js";import{s as u}from"./Action-CL1C_viL.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BAriRr11.js";import{F as S}from"./FieldError-CMRDgIJA.js";import{R as h}from"./ResetButton-ClO0pQ_P.js";import{S as x}from"./SubmitButton-yYHmVNB1.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B5Kx9HDY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Label-Bdtu_aaV.js";import"./utils-D7f3lHNi.js";import"./Hidden-B-7zzc6R.js";import"./dynamic-V9DMyUPi.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./ContextMenuSection-C2eJTG_x.js";import"./lib-90ocxLs-.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useEvent-BIGXqu2E.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./getActionGroupSlot-BjVvI7Fw.js";import"./useStatic-CKUwua6_.js";import"./context-DVwGhZ9t.js";import"./TextFieldBase-DgsBC5qA.js";import"./FieldDescription-DnEcRZ-N.js";import"./useFieldComponent-DadDOWX3.js";import"./TextField-CS4Y1EUt.js";import"./FieldError-Dpf9fLlc.js";import"./Form-CmE3z4DB.js";import"./Group-D0eC1hRN.js";import"./Input-Bo9ofHsZ.js";import"./useTextField-B7CblbpP.js";import"./useFormReset-4DpQBagB.js";import"./useFormValidation-WNRR-_5g.js";import"./useControlledHostValueProps-B4IoLjjH.js";import"./IconDanger-D44A5Pyv.js";import"./useRef-BLO8ZTUr.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
