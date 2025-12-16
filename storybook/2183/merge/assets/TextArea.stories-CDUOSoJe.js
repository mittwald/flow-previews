import{j as r,r as F}from"./iframe-C0Xzz6Xl.js";import{u as p,F as d}from"./Form-BfgXYtPL.js";import{L as o}from"./Label-B2dU-Foq.js";import{F as l,t as j}from"./Field-DTxkV_LC.js";import{B as c}from"./Button-D6SK2KLv.js";import{S as g}from"./Section-5zw9Z7q2.js";import{A as b}from"./ActionGroup-C9tEr64z.js";import{s as u}from"./Action-BlB31QBr.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BLfhi06K.js";import{F as S}from"./FieldError-COJQpxO2.js";import{R as h}from"./ResetButton-3SEBVdnD.js";import{S as x}from"./SubmitButton-BPi9gjAx.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-GRuvXKoj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./Label-CKDZcwiZ.js";import"./utils-DFqauJju.js";import"./Hidden-C5gaELfT.js";import"./dynamic-B_nxzmOn.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";import"./ContextMenuSection-CuOhHuwr.js";import"./lib-90ocxLs-.js";import"./Dialog-DXKvHJZX.js";import"./RSPContexts-xpSy9BW_.js";import"./OverlayArrow-CpBfJzRQ.js";import"./useControlledState-DnOVZzTA.js";import"./Collection-BflGVmPS.js";import"./CollectionBuilder-D_O-sn_C.js";import"./SelectionIndicator-C8D-p8dY.js";import"./Separator-D5lpfI0l.js";import"./SelectionManager-B3HFpuo-.js";import"./useEvent-CecaYo_j.js";import"./useCollator-BDv8d74S.js";import"./FocusScope-ClGhoguJ.js";import"./VisuallyHidden-DF-QcwIB.js";import"./getActionGroupSlot-BcOhbfZF.js";import"./useStatic-BdnZkR9g.js";import"./context-Cc_BWEb7.js";import"./TextFieldBase-DpdekzGl.js";import"./FieldDescription-C_2F70ew.js";import"./useFieldComponent-BRIXb0CQ.js";import"./TextField-CeQYd3lk.js";import"./FieldError-D1TN1uH_.js";import"./Form-DJAYx_sb.js";import"./Group-BpFeMFVu.js";import"./Input-rZfax9iy.js";import"./useTextField-Cj_XPZw1.js";import"./useFormReset-BXb8b3rI.js";import"./useFormValidation-D4H7vgpB.js";import"./useControlledHostValueProps-BeTsIibq.js";import"./IconDanger-Dkbk0FFN.js";import"./useRef-BKT5_v6o.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
