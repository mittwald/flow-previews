import{r as C,j as r}from"./iframe-BzN-GDSV.js";import{a as p,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-HvWvEm8D.js";import{B as l}from"./Button-CqLQCx50.js";import{S as B}from"./Section-DEFyhRPR.js";import{A as b}from"./ActionGroup-RxX1lyJu.js";import{s as u}from"./Action-DMSKmOJg.js";import{T as i}from"./Text-w8Xk5tzh.js";import{C as m}from"./CheckboxButton-_6gIIOeF.js";import{C as d}from"./Content-0Z78E3Jo.js";import{F as E}from"./FieldError-C55-OsIs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBHHoCBf.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./context-CV01TaOS.js";import"./useRef-ClXlOumO.js";import"./utils-DZiSZNRH.js";import"./ButtonView-GH3X29hF.js";import"./browser-BZan5p2Q.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./LoadingSpinner-DwhPZLF8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTrxkMff.js";import"./ProgressBar-BhNLuOhb.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D4-tvGJV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CKBw2syN.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useFocusable-CZxxukff.js";import"./ContextMenuSection-Fnzuskm8.js";import"./Dialog-D-_l-Dz2.js";import"./RSPContexts-836Xa0kI.js";import"./OverlayArrow-45O3XaxD.js";import"./useControlledState-VicJRSad.js";import"./Collection-Ckv3RK5p.js";import"./CollectionBuilder-P-tNz_Gd.js";import"./SelectionIndicator-Clnr_8iz.js";import"./Separator-grnmoeTC.js";import"./Text-9Slz249r.js";import"./SelectionManager-TX1M696V.js";import"./useEvent-D8LZAcV8.js";import"./useCollator-6LAjsKx4.js";import"./FocusScope-BMhRfsbp.js";import"./VisuallyHidden-DwmcGrU0.js";import"./getActionGroupSlot-CEsFjkmd.js";import"./useStatic-BCK3u9CD.js";import"./context-CO_pcEBI.js";import"./EmulatedBoldText-Bg-XhDZU.js";import"./Checkbox-DI4moWV3.js";import"./useFieldComponent-DWIvkE7m.js";import"./FieldError-DErqUxVb.js";import"./Form-BzSZff5w.js";import"./useFormValidation-Bm80HquG.js";import"./useToggleState-FvSvnnqY.js";import"./useFormReset-C_nKv_ku.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
