import{r as C,j as r}from"./iframe-DG8PGYI2.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-BMqJhTJD.js";import{B as l}from"./Button-DsdihroW.js";import{S as B}from"./Section-Da7bIBGb.js";import{A as b}from"./ActionGroup-CyRYJEmZ.js";import{s as u}from"./ActionBatch-BRiItlo9.js";import{T as i}from"./Text-DXfg_t75.js";import{C as m}from"./CheckboxButton-sximAvJj.js";import{C as p}from"./Content-CXy-CNoO.js";import{F as E}from"./FieldError-Cib7Ob9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BkMen_On.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./ActionGroupView-CyN-fLB9.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./RSPContexts-DatC1hy5.js";import"./utils-07AIACoX.js";import"./Modal-D9mRgYws.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./Overlay-BBbCl7H6.js";import"./OverlayContextProvider-DoYhYc18.js";import"./LoadingSpinner-JP8g8ixs.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./Text-0L-5i7aJ.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./ButtonView-BM2ZoM3D.js";import"./Flex-zawCEP1d.js";import"./useRef-DIQYbD7f.js";import"./browser-CdVMgEWJ.js";import"./ContextMenuSection-BKYmu9Je.js";import"./getActionGroupSlot-D51i84O1.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Checkbox-6YMKBKmd.js";import"./useFieldComponent-CBicToer.js";import"./FieldError-bE1Vz7Na.js";import"./Form-COtDtsRb.js";import"./useFormValidation-DkNbsHEL.js";import"./useToggleState-DpBaLzJt.js";import"./useFormReset-BIdGIAau.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
