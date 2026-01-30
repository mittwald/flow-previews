import{j as r,r as j}from"./iframe-BBHdjMJ6.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-CsgBdy31.js";import{L as t}from"./Label-D4z-eNsD.js";import{B as u}from"./Button-P5io5pgW.js";import{S as E}from"./Section-BGan-5YC.js";import{A as S}from"./ActionGroup-CRSw6t78.js";import{s as c}from"./Action-qWLGDSFj.js";import{I as l,f as D,K as B}from"./DateInput-C2njalPn.js";import{D as o}from"./DatePicker-D6Z7gppg.js";import{F as g}from"./FieldError-DdPPmb_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cm-8a2Jt.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./clsx-B-dksMZM.js";import"./index-FWsSj9e8.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./useRef-CBW8wZsc.js";import"./utils-gePwv3Li.js";import"./ButtonView-CbJs68it.js";import"./browser-BpCzgQab.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BicAkDgM.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocusable-CfkxnlZA.js";import"./ContextMenuSection-jSS7omV8.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useControlledState-CTrYQ-In.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./getActionGroupSlot-DTels04I.js";import"./useStatic-C9-mjYGz.js";import"./context-DiIk_s_n.js";import"./FieldError-D_l7_28D.js";import"./Form-Dur_LiI2.js";import"./Group-BKul3vV0.js";import"./Input-a6j3yjSB.js";import"./useFormValidation-jj6Fwru_.js";import"./useFormReset-CMCffA9I.js";import"./useSpinButton-towavnni.js";import"./useFilter-C7RV072S.js";import"./useFieldComponent-DcHfvLKR.js";import"./Popover-ZlNB2WlB.js";import"./useOverlayController-CB3s63Hy.js";import"./OverlayContextProvider-Co9CnEOm.js";import"./RangeCalendar-CYQ-wzdw.js";import"./Heading-UXRD4YW7.js";import"./useUpdateEffect-BtQIQpp8.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
