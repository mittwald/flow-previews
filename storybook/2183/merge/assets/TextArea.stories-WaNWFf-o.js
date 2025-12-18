import{j as r,r as F}from"./iframe-BTx5vfX7.js";import{u as p,F as d}from"./Form-BJsxvJji.js";import{L as o}from"./Label-D_U9lVoj.js";import{F as l,t as j}from"./Field-Byx7yqoA.js";import{B as c}from"./Button-D0j5fRAE.js";import{S as g}from"./Section-Cwd5koeW.js";import{A as b}from"./ActionGroup-BRc6QQmr.js";import{s as u}from"./Action-CSkp_lnv.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BXMSa74E.js";import{F as S}from"./FieldError-z-ClA5kd.js";import{R as h}from"./ResetButton-C1Ps8PPd.js";import{S as x}from"./SubmitButton-Cb8N2zXt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-D9-bvGMx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./Label-nt-Mf4T_.js";import"./utils-Rd_MYUg3.js";import"./Hidden-B6Npv2sL.js";import"./dynamic-D8ImZldj.js";import"./IconChevronDown-Bn-1yhHQ.js";import"./remote-CDkUNGK4.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./Text-DtYTBG7c.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";import"./ContextMenuSection-QYYvFEyc.js";import"./lib-90ocxLs-.js";import"./Dialog-CQOoDKQ_.js";import"./RSPContexts-BtkGYzrU.js";import"./OverlayArrow-eT6vjoGK.js";import"./useControlledState-DNSedTkS.js";import"./Collection-Bq23K6rA.js";import"./CollectionBuilder-BJtlCmWC.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./Separator-hpMdbhNe.js";import"./SelectionManager-ix7t88Nr.js";import"./useEvent-B9LXMUdK.js";import"./useCollator-BFlHC0Dr.js";import"./FocusScope-ConnSCr6.js";import"./VisuallyHidden-xosq-5v9.js";import"./getActionGroupSlot-D_UK-737.js";import"./useStatic-BtxQ9m_K.js";import"./context-q9yNmKLz.js";import"./TextFieldBase-C14Srvb-.js";import"./FieldDescription-ylXyloZw.js";import"./useFieldComponent-a0kyTMto.js";import"./TextField-C8z_e7UZ.js";import"./FieldError-I1Bua9KH.js";import"./Form-BpaxdIp-.js";import"./Group-C7X32I-5.js";import"./Input-DfioYz8I.js";import"./useTextField-ClY4yZY-.js";import"./useFormReset-C2fqGBKA.js";import"./useFormValidation-CWpL65wq.js";import"./useControlledHostValueProps-DL2SxzgW.js";import"./IconDanger-C580gt5j.js";import"./useRef-xHYciXoC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
