import{j as r,r as x}from"./iframe-BrRYKFNZ.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-B0FIkwa9.js";import{B as d}from"./Button-C60cqGfK.js";import{S as j}from"./Section-UYkQGpw-.js";import{A as b}from"./ActionGroup-CcJlTct_.js";import{s as u}from"./Action-D8nw7HFc.js";import{C as t}from"./Checkbox-CWR--2Ke.js";import{F as E}from"./FieldError-Ce69irxX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CVEHQCEx.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./useRef-CwDhitpI.js";import"./utils-B1YhIU5r.js";import"./ButtonView-CpxOXa2e.js";import"./browser-rpb3JyGK.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./Text-BQhotjr-.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-fw0Lqzwn.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./ContextMenuSection-CWAGy83O.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./getActionGroupSlot-BX1oqOED.js";import"./useStatic-CMNgov9B.js";import"./context-CrKKxYCQ.js";import"./useFieldComponent-D0nvFHA9.js";import"./FieldError-DMOv5TcV.js";import"./Form-C0F-7ONn.js";import"./useFormValidation-vznVoA4Z.js";import"./useToggleState-CxSzAxcM.js";import"./useFormReset-9TaX9dD_.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
