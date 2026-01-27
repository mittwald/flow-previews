import{j as r,r as C}from"./iframe-EUG4rdOg.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-CYKdI8jW.js";import{B as l}from"./Button-CEake6G1.js";import{S as B}from"./Section-BL7lUYfi.js";import{A as b}from"./ActionGroup-BZH42G79.js";import{s as u}from"./Action-DJ1WPhSw.js";import{T as i}from"./Text-DlICJI4S.js";import{C as m}from"./CheckboxButton-Ch-V-9wf.js";import{C as d}from"./Content-QCAVaCkP.js";import{F as E}from"./FieldError-D_yigqvG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-NoN6qZ.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./clsx-B-dksMZM.js";import"./index-Dmbpubym.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./useRef-oohqBRQZ.js";import"./utils-DJPQq0Ir.js";import"./ButtonView-BC_ryqYl.js";import"./browser-Dr5hWFfi.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./ContextMenuSection-BWaZOiqV.js";import"./Dialog-ClYDKCvQ.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./Text-BNRjjFE0.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./VisuallyHidden-DwLUyGt6.js";import"./getActionGroupSlot-nY47Clec.js";import"./useStatic-uvHDPGza.js";import"./context-B_Qm6y3p.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Checkbox-CcfL8Zg2.js";import"./useFieldComponent-Bs969hQl.js";import"./FieldError-CVa256dc.js";import"./Form-DdP99ZP3.js";import"./useFormValidation-OWtbzU_T.js";import"./useToggleState-Bt36YEmE.js";import"./useFormReset-BWBNxDQ8.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
