import{j as r,r as x}from"./iframe-P-BtG9en.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-Bun6L1Pq.js";import{B as d}from"./Button-BDKyvND0.js";import{S as j}from"./Section-58eqO89k.js";import{A as b}from"./ActionGroup-BOaMC-Ca.js";import{s as u}from"./Action-BXaB41c4.js";import{C as t}from"./Checkbox-CBMepI4Z.js";import{F as E}from"./FieldError-BKtriW0o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./useRef-Vl5p17w5.js";import"./utils-B0ReHH5J.js";import"./ButtonView-CwOL1ZjU.js";import"./browser-CAs7Gyq6.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./context-DzeViRSK.js";import"./useFieldComponent-DCdIumPj.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./useFormValidation-ePPiHYYq.js";import"./useToggleState-DaxdEKB-.js";import"./useFormReset-EHJI2p2K.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
