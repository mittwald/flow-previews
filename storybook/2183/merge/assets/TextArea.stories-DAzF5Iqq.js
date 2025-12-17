import{j as r,r as F}from"./iframe-B7RREkGu.js";import{u as p,F as d}from"./Form-BHjZ7jIc.js";import{L as o}from"./Label-DJkUDzdc.js";import{F as l,t as j}from"./Field-BIj9crRk.js";import{B as c}from"./Button-TsdLobX9.js";import{S as g}from"./Section-D2KxvX5n.js";import{A as b}from"./ActionGroup-WdHpAfwq.js";import{s as u}from"./Action-BcGzUsr7.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CuBkzdmp.js";import{F as S}from"./FieldError-CukmHJnZ.js";import{R as h}from"./ResetButton-feHLzk8J.js";import{S as x}from"./SubmitButton-DO8cAR1F.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DkVC7uJT.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./index-C8g7-GlJ.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./Label-B5AW6xg7.js";import"./utils-IlafnyMI.js";import"./Hidden-zIyTGZgm.js";import"./dynamic-CWl0hyOW.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./IconX-B38mn789.js";import"./IconCheck-KHnf6U2_.js";import"./Text-DoQtsqjx.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./Text-CPOpiDMW.js";import"./LoadingSpinner-BcPCL_oT.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0GEfT2Oo.js";import"./ProgressBar-DnQzXKKa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./ContextMenuSection-CYbe8IBJ.js";import"./lib-90ocxLs-.js";import"./Dialog-DUDQW2g7.js";import"./RSPContexts-ByjogFSB.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./useStatic-tA9-ZYDd.js";import"./context-BZ5WwvCq.js";import"./TextFieldBase-KWYLrW2_.js";import"./FieldDescription-WN9h5Djj.js";import"./useFieldComponent-B2EVEjTj.js";import"./TextField-BPUY2Bu_.js";import"./FieldError-C0DtTLwc.js";import"./Form-C5YY3R3J.js";import"./Group-CDE79XeV.js";import"./Input-CdWy1INE.js";import"./useTextField-BewiyiMO.js";import"./useFormReset-OFQGg9Qq.js";import"./useFormValidation-CU0n9v2w.js";import"./useControlledHostValueProps-BaDoBa4u.js";import"./IconDanger-DT-iZjBY.js";import"./useRef-2iCe8zXG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
