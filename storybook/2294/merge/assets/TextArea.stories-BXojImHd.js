import{j as r,r as F}from"./iframe-Da9Lw8R_.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DAXeM7OM.js";import{L as o}from"./Label-D7d2SkgN.js";import{B as c}from"./Button-CkcTXATp.js";import{S as g}from"./Section-CjTpAbFV.js";import{A as b}from"./ActionGroup-n4kQwCcc.js";import{s as u}from"./Action-CSMihAu4.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-D-Lx-brX.js";import{F as S}from"./FieldError-DXoqYbez.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bM8H28Zu.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./clsx-B-dksMZM.js";import"./index-TT_JC2bB.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./useRef-Dm7IxWdg.js";import"./utils-Cwd4tFKX.js";import"./useOverlayController-DXJN5Feb.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./ButtonView-C0Td427Q.js";import"./browser-DDWH8I0V.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIogNAwh.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./ContextMenuSection-CnBpObAx.js";import"./Dialog-Cw1z9AtQ.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useControlledState-B4YxKAgg.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./TextFieldBase-D33aqkc_.js";import"./FieldDescription-C0EOWzJH.js";import"./useFieldComponent-yufHgNqa.js";import"./TextField-BMLAakzF.js";import"./FieldError-DSdSdK3H.js";import"./Form-D3ZAWear.js";import"./Group-CWa8s-M0.js";import"./Input-inZV5DIC.js";import"./useTextField-oegUv-Jp.js";import"./useFormReset-4DR8Px1h.js";import"./useFormValidation-DjSyrx87.js";import"./useControlledHostValueProps-rJ1Rukac.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
