import{j as r,r as j}from"./iframe-DITN2CQJ.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DxGsaWiK.js";import{L as t}from"./Label-DJUexJHI.js";import{B as u}from"./Button-CLzuKoaU.js";import{S as E}from"./Section-cnEthzmo.js";import{A as S}from"./ActionGroup-eIIxfA96.js";import{s as c}from"./Action-2qaAsuOc.js";import{I as l,f as D,K as B}from"./DateInput-CB8kF9kF.js";import{D as o}from"./DatePicker-XDkS6tvG.js";import{F as g}from"./FieldError-B_BzuzIl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTg8la0V.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./useRef-DMCflsxx.js";import"./utils-BKdkt1x6.js";import"./ButtonView-Cvj-tSsY.js";import"./browser-BAwbicjx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./Text-CADg3_Hr.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo3aLfgI.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./ContextMenuSection-CqDMtRiW.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./useStatic-CpFYvUzY.js";import"./context-DvDSM24h.js";import"./FieldError-DyUcL9VR.js";import"./Form-CKWsALrB.js";import"./Group-pLm-fq-m.js";import"./Input-Ct_cW2oz.js";import"./useFormValidation-PWdhcFqO.js";import"./useFormReset-DRsSvhwB.js";import"./useSpinButton-jhcoRUKm.js";import"./useFilter-Dnu8mjJR.js";import"./useFieldComponent-CFjzq3ou.js";import"./Popover-FA_JZE95.js";import"./useOverlayController-T6amjECI.js";import"./OverlayContextProvider-Dgir1kFJ.js";import"./RangeCalendar-DAWyKIvN.js";import"./Heading-DwqLUz9F.js";import"./useUpdateEffect-D-4C70ig.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
