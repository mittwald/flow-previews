import{r as F,j as r}from"./iframe-CLJtUSH1.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-BLXcg6zO.js";import{L as o}from"./Label-CL2lxKWa.js";import{B as c}from"./Button-BdSBoC_f.js";import{S as g}from"./Section-CZHmN5Jd.js";import{A as b}from"./ActionGroup-BIdm5xS5.js";import{s as u}from"./Action-B5Dc0NVU.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-i--ZnQ2S.js";import{F as S}from"./FieldError-DOHJV3_t.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6if2hzUD.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./clsx-B-dksMZM.js";import"./index-C5KxKItK.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./useRef-C6pb-qXv.js";import"./utils-DvtEjNbs.js";import"./ButtonView-DmFKtMwL.js";import"./browser-BMt8iY1_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./Text-B6Fe6olk.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./LoadingSpinner-D1C6LJRF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-bTiOWaRI.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useFocusable-DsRGTtrf.js";import"./ContextMenuSection-DdrBdwjw.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./useControlledState-BRozYY3l.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./useStatic-Dks4Zmqh.js";import"./context-jvIE4x8v.js";import"./useFieldComponent-BH0Y7qa0.js";import"./useControlledHostValueProps-DozfvDTN.js";import"./FieldDescription-Durr1uPe.js";import"./TextField-8xGAq-zt.js";import"./FieldError-DZmbq2tb.js";import"./Form-DsvsQY6J.js";import"./Group-D9i1M0Ig.js";import"./Input-CzVRJw_9.js";import"./useTextField-DNGW8mQ7.js";import"./useFormReset-3JYpIfMS.js";import"./useFormValidation-vO_E-FCH.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
