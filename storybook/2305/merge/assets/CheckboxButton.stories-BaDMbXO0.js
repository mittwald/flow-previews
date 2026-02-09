import{j as r,r as C}from"./iframe-nlVW-CPZ.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-C0RVFwP1.js";import{B as l}from"./Button-_Sn69Jgj.js";import{S as B}from"./Section-BCmWc09Q.js";import{A as b}from"./ActionGroup-CaBABiHS.js";import{s as u}from"./Action-VhJyCQWd.js";import{T as i}from"./Text-BzuDjaz9.js";import{C as m}from"./CheckboxButton-BZjMsJI-.js";import{C as d}from"./Content-DP-ooqyv.js";import{F as E}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dsm5lbml.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./useRef-CfQO_nnJ.js";import"./utils-CyuEFqip.js";import"./ButtonView-CLlJ09F8.js";import"./browser-BoEfPalF.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./Text-sEy-KTn9.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./useStatic-C5UephlJ.js";import"./context-DJb9q1Xr.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Checkbox-CtaXoOTv.js";import"./useFieldComponent-DOzg870F.js";import"./FieldError-BpjEpOFY.js";import"./Form-DSPAlIu9.js";import"./useFormValidation-DqSMo-uw.js";import"./useToggleState-DZhZWEOQ.js";import"./useFormReset-J8eUPjf8.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
