import{j as r,r as S}from"./iframe-P-BtG9en.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-Bun6L1Pq.js";import{L as s}from"./Label-P3DTYY4f.js";import{B as d}from"./Button-BDKyvND0.js";import{S as j}from"./Section-58eqO89k.js";import{A as b}from"./ActionGroup-BOaMC-Ca.js";import{s as c}from"./Action-BXaB41c4.js";import{S as m}from"./SearchField-ClN7l_bY.js";import{F as E}from"./FieldError-BKtriW0o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./useRef-Vl5p17w5.js";import"./utils-B0ReHH5J.js";import"./ButtonView-CwOL1ZjU.js";import"./browser-CAs7Gyq6.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./context-DzeViRSK.js";import"./useFieldComponent-DCdIumPj.js";import"./useControlledHostValueProps-CU68XwN9.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useTextField-r4nD2off.js";import"./useFormReset-EHJI2p2K.js";import"./useFormValidation-ePPiHYYq.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
