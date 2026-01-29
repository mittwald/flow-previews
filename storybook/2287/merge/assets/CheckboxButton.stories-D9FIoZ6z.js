import{j as r,r as C}from"./iframe-CgeYxcj8.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-Cs7EEVT-.js";import{B as l}from"./Button-DR_1qYQ2.js";import{S as B}from"./Section-C3AA-XhZ.js";import{A as b}from"./ActionGroup-SAvPHs6u.js";import{s as u}from"./Action-DlDUTAjM.js";import{T as i}from"./Text-fEw-hlGn.js";import{C as m}from"./CheckboxButton-C9EVidBS.js";import{C as d}from"./Content-CCJfbBVV.js";import{F as E}from"./FieldError-CDWzOCc-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CbTKsx_B.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./clsx-B-dksMZM.js";import"./index-SS9EXt6e.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./useRef-YSwTV-ZZ.js";import"./utils-BH6Z59zo.js";import"./ButtonView-DNnrBHqR.js";import"./browser-DJjrqqpQ.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DX014ZyL.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Dialog-LUBljj5i.js";import"./RSPContexts-D3svuC0u.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./Text-D1ETBO0D.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./useStatic-BH0JS_W8.js";import"./context-x8law5mp.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Checkbox-DlLyLmOQ.js";import"./useFieldComponent-DjF7VplI.js";import"./FieldError-BanRAUWl.js";import"./Form-DrrI3HBf.js";import"./useFormValidation-CUbvhZHn.js";import"./useToggleState-D5RJaWcN.js";import"./useFormReset-CLCQkLzV.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
