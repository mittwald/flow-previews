import{r as F,j as r}from"./iframe-DAdEF_a9.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./FormRootError-DFCTJN0D.js";import{L as o}from"./Label-D1h8c298.js";import{B as c}from"./Button-BL7hv3yg.js";import{S as g}from"./Section-CLn2WL9U.js";import{A as b}from"./ActionGroup-BlNNsUJ6.js";import{s as u}from"./ActionBatch-BtBHZwy0.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-C7MFezcg.js";import{F as S}from"./FieldError-DAuD7Eqr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pIUCZeo6.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./ActionGroupView-oVftnOVm.js";import"./Content-CJNhBNrl.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./RSPContexts-BAZVNF9B.js";import"./utils-B1o5BDIk.js";import"./Text-BlXexclX.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./Modal-Bw_NLwNU.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./Overlay-BvmU2R8J.js";import"./OverlayContextProvider-DG82vmF2.js";import"./LoadingSpinner-BzYwrllt.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./ButtonView-B0xnqfb2.js";import"./Flex-BMWRjUwl.js";import"./useRef-DEVjfIov.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C3uZY6Us.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./useFieldComponent-CLfspKSt.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./FieldDescription-CFQCjYVN.js";import"./TextField-4ha8Auah.js";import"./FieldError-Be27Lv36.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Xr as __namedExportsOrder,Qr as default};
