import{j as r,r as F}from"./iframe-CGL3Ztd8.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-Df-4v6uT.js";import{L as o}from"./Label-BdVzzMHl.js";import{B as c}from"./Button-CdFi_Gvp.js";import{S as g}from"./Section-DahycNJE.js";import{A as b}from"./ActionGroup-CrScu9QD.js";import{s as u}from"./Action-D7FDWjoF.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-dbtqo4IG.js";import{F as S}from"./FieldError-Bg6s6kv2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8bvHICk.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./clsx-B-dksMZM.js";import"./index-eHspQkB2.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./useRef-BOtt9UAz.js";import"./utils-BPLHaINM.js";import"./ButtonView-DVA4InJ8.js";import"./browser-Dk-cIrUN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Text-_sa0OuU0.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpWTOkQr.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./ContextMenuSection-DZtKonlo.js";import"./Dialog-D5rIpj4K.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./getActionGroupSlot-D2X8q845.js";import"./useStatic-aF_CYkuk.js";import"./context-B-HkcFzY.js";import"./useFieldComponent-CHIggLRE.js";import"./useControlledHostValueProps-DHO1n_5T.js";import"./FieldDescription-DTkn5Gpa.js";import"./TextField-Cye5nWIo.js";import"./FieldError-CZz7QnF8.js";import"./Form-Ba7VKjcY.js";import"./Group-DH03d5g8.js";import"./Input-CtqQGuCR.js";import"./useTextField-CwFUpzxX.js";import"./useFormReset-C_UBUwcF.js";import"./useFormValidation-DhAeSygX.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
