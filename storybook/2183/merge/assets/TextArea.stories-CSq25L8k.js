import{j as r,r as F}from"./iframe-BFixO3jI.js";import{u as p,F as d}from"./Form-CCXxtzXF.js";import{L as o}from"./Label-DDQhNyeb.js";import{F as l,t as j}from"./Field-DYUiszqZ.js";import{B as c}from"./Button-yJ8r8LHg.js";import{S as g}from"./Section-t5FnDHfW.js";import{A as b}from"./ActionGroup-IxKHIUSR.js";import{s as u}from"./Action-oG95m3o9.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-ClusFO9l.js";import{F as S}from"./FieldError-DNu2tCaK.js";import{R as h}from"./ResetButton-Cks5zUP9.js";import{S as x}from"./SubmitButton-BOOIKePr.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CbH1E9WO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./dynamic-hYW7P0NC.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./ContextMenuSection-B4F_li7n.js";import"./lib-90ocxLs-.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./getActionGroupSlot--aYDVJlg.js";import"./useStatic-CTmMZwD4.js";import"./context-tjjAcI-d.js";import"./TextFieldBase-B_7Xhy-z.js";import"./FieldDescription-2Pf141Y1.js";import"./useFieldComponent-mJg7O_gG.js";import"./TextField-ssxgaXWt.js";import"./FieldError-CjKulGDW.js";import"./Form-PAQ4bQ0C.js";import"./Group-CzFM72Xs.js";import"./Input-_A_Ox9j0.js";import"./useTextField-B20xVaBF.js";import"./useFormReset-De7QdeR1.js";import"./useFormValidation-B69zYJzr.js";import"./useControlledHostValueProps-CqOtxoaB.js";import"./IconDanger--IOlURNT.js";import"./useRef-DL_WCxyN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
