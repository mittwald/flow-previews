import{j as r,r as x}from"./iframe-BBHdjMJ6.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-CsgBdy31.js";import{L as o}from"./Label-D4z-eNsD.js";import{B as p}from"./Button-P5io5pgW.js";import{S as g}from"./Section-BGan-5YC.js";import{A as b}from"./ActionGroup-CRSw6t78.js";import{s as u}from"./Action-qWLGDSFj.js";import{N as t}from"./NumberField-CwquDuiB.js";import{F as E}from"./FieldDescription-C-QWZBIG.js";import{F as S}from"./FieldError-DdPPmb_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cm-8a2Jt.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./clsx-B-dksMZM.js";import"./index-FWsSj9e8.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./useRef-CBW8wZsc.js";import"./utils-gePwv3Li.js";import"./ButtonView-CbJs68it.js";import"./browser-BpCzgQab.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BicAkDgM.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocusable-CfkxnlZA.js";import"./ContextMenuSection-jSS7omV8.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useControlledState-CTrYQ-In.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./getActionGroupSlot-DTels04I.js";import"./useStatic-C9-mjYGz.js";import"./context-DiIk_s_n.js";import"./useFieldComponent-DcHfvLKR.js";import"./useControlledHostValueProps-Bh4DAuTR.js";import"./FieldError-D_l7_28D.js";import"./Form-Dur_LiI2.js";import"./Group-BKul3vV0.js";import"./Input-a6j3yjSB.js";import"./useFormValidation-jj6Fwru_.js";import"./useSpinButton-towavnni.js";import"./useFormReset-CMCffA9I.js";import"./useTextField-BtK0z8dg.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
