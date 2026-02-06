import{j as r,r as x}from"./iframe-P-BtG9en.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-Bun6L1Pq.js";import{L as o}from"./Label-P3DTYY4f.js";import{B as p}from"./Button-BDKyvND0.js";import{S as g}from"./Section-58eqO89k.js";import{A as b}from"./ActionGroup-BOaMC-Ca.js";import{s as u}from"./Action-BXaB41c4.js";import{N as t}from"./NumberField-DhfuoLd5.js";import{F as E}from"./FieldDescription-DHDLfryo.js";import{F as S}from"./FieldError-BKtriW0o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./useRef-Vl5p17w5.js";import"./utils-B0ReHH5J.js";import"./ButtonView-CwOL1ZjU.js";import"./browser-CAs7Gyq6.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./context-DzeViRSK.js";import"./useFieldComponent-DCdIumPj.js";import"./useControlledHostValueProps-CU68XwN9.js";import"./FieldError-C3DeF1uc.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useFormValidation-ePPiHYYq.js";import"./useSpinButton-wQu-Z3ah.js";import"./useFormReset-EHJI2p2K.js";import"./useTextField-r4nD2off.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
