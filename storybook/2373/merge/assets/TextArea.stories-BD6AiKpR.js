import{r as F,j as r}from"./iframe-C8tsaODo.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./FormRootError-Ce5cv5RF.js";import{L as o}from"./Label-1oLHWqvU.js";import{B as c}from"./Button-BxguJBhT.js";import{S as g}from"./Section-DA8oIEqU.js";import{A as b}from"./ActionGroup-CU9s6S-m.js";import{s as u}from"./ActionBatch-BUyIhhJw.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CMvy5PN-.js";import{F as S}from"./FieldError-EQJdnOUU.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DA7vjxZL.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./ActionGroupView-DhBOLqQn.js";import"./Content-Cp_HsIUT.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./RSPContexts-DtfJrVYY.js";import"./utils-CdcYI7XL.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./Modal-BYMO-zFY.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./Overlay-BnyG3_RP.js";import"./OverlayContextProvider-Buisu9vo.js";import"./LoadingSpinner-C-PnKOui.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Dialog-CNeqByqP.js";import"./Button-Dm2nITC7.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";import"./ButtonView-CjeFZr2s.js";import"./Flex-CcRj0a-w.js";import"./useRef-Dg0IXyzM.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BnK78UMz.js";import"./getActionGroupSlot-C3_vSruP.js";import"./useFieldComponent-FgbLRzY4.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./FieldDescription-BZoE01SC.js";import"./TextField-B6A8u9tv.js";import"./FieldError-DSXMmXMO.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useTextField-BlhjZ_T-.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Xr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Zr as __namedExportsOrder,Xr as default};
