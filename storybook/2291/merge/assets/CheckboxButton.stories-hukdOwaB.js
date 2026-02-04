import{j as r,r as C}from"./iframe-BrRYKFNZ.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-B0FIkwa9.js";import{B as l}from"./Button-C60cqGfK.js";import{S as B}from"./Section-UYkQGpw-.js";import{A as b}from"./ActionGroup-CcJlTct_.js";import{s as u}from"./Action-D8nw7HFc.js";import{T as i}from"./Text-BQhotjr-.js";import{C as m}from"./CheckboxButton-B8bhQb3h.js";import{C as d}from"./Content-C6y28tdy.js";import{F as E}from"./FieldError-Ce69irxX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CVEHQCEx.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./useRef-CwDhitpI.js";import"./utils-B1YhIU5r.js";import"./ButtonView-CpxOXa2e.js";import"./browser-rpb3JyGK.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-fw0Lqzwn.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./ContextMenuSection-CWAGy83O.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./Text-C7DedtDs.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./getActionGroupSlot-BX1oqOED.js";import"./useStatic-CMNgov9B.js";import"./context-CrKKxYCQ.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Checkbox-CWR--2Ke.js";import"./useFieldComponent-D0nvFHA9.js";import"./FieldError-DMOv5TcV.js";import"./Form-C0F-7ONn.js";import"./useFormValidation-vznVoA4Z.js";import"./useToggleState-CxSzAxcM.js";import"./useFormReset-9TaX9dD_.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
