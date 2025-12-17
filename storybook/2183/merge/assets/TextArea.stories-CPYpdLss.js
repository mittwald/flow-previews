import{j as r,r as F}from"./iframe-CuoLN6Ak.js";import{u as p,F as d}from"./Form-CSUkBA4d.js";import{L as o}from"./Label-CaF-n4li.js";import{B as c}from"./Button-Cfn_KBZi.js";import{S as j}from"./Section-DpKeH7t9.js";import{A as g}from"./ActionGroup-BQouqhs8.js";import{s as l}from"./Action-BkuSI1AI.js";import{d as b}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-qlMePlf0.js";import{F as E}from"./FieldError-BXdT0ENq.js";import{F as u,t as S}from"./Field-Bn8O-tEJ.js";import{R as h}from"./ResetButton-CuwicxmT.js";import{S as x}from"./SubmitButton-DikI2hGX.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-t1e5k5Lt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./context-DM2sT4iG.js";import"./Label-D3KIvHQC.js";import"./utils-C2NHa3pd.js";import"./Hidden-DgR9vk0-.js";import"./IconApp-BDJ8KTSO.js";import"./remote-JKpMdsKf.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./Text-DdChUKUI.js";import"./EmulatedBoldText-BNHG0Gfg.js";import"./Text-C8IviCt6.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6bHbdkl.js";import"./ProgressBar-DQXQN5uc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./ContextMenuSection-BtjuRqVn.js";import"./lib-90ocxLs-.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./OverlayArrow-C99iKRaY.js";import"./useControlledState-ItXXMvHS.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useEvent-CGtQDWm6.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";import"./dynamic-8E81vrw4.js";import"./getActionGroupSlot-w80GylpO.js";import"./useStatic-DF3kEdZS.js";import"./context-Cxg_dyF2.js";import"./TextFieldBase-B-s9g3Ac.js";import"./FieldDescription-B83QXWUS.js";import"./useFieldComponent-CpAAuxDf.js";import"./TextField-auQk3RGt.js";import"./FieldError-zdBOb0_m.js";import"./Form-BoKLrbzS.js";import"./Group-y2y6-45-.js";import"./Input-CSQeI68y.js";import"./useTextField-DuTAd_dm.js";import"./useFormReset-Cj_2aRsw.js";import"./useFormValidation-BeXwm1Ez.js";import"./useControlledHostValueProps-BqZEo0r9.js";import"./IconDanger-CxUQbc1u.js";import"./useRef-Qg3Ql4nX.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:u,render:()=>{const s=async f=>{await l(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:b.medium,messageRequired:"",messageMaxLength:""}}),i=S();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(j,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(g,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
