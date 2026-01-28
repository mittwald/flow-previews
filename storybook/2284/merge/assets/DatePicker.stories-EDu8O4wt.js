import{j as r,r as j}from"./iframe-BbsOAs33.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DaMzmg4c.js";import{L as t}from"./Label-DjvR0JzL.js";import{B as u}from"./Button-CAGXh9YY.js";import{S as E}from"./Section-Cne65CO2.js";import{A as S}from"./ActionGroup-VbmjmzLd.js";import{s as c}from"./Action-BXhMVvh_.js";import{I as l,f as D,K as B}from"./DateInput-sBXhk1hl.js";import{D as o}from"./DatePicker-iLwshGAT.js";import{F as g}from"./FieldError-DSzt6ekN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoVYgUcD.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./clsx-B-dksMZM.js";import"./index-32jMpZgo.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./useRef-D3zVPm3c.js";import"./utils-d4vW56Wr.js";import"./ButtonView-BQhPvsO2.js";import"./browser-6_CJeJSO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Text-BYxWYBBY.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuEkD-Mt.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./ContextMenuSection-Dt_P0EQ4.js";import"./Dialog-Ch_CeJ5E.js";import"./RSPContexts-DfamIfkg.js";import"./OverlayArrow-N6t0bVoH.js";import"./useControlledState-QxMMjnNS.js";import"./Collection-Bp73NzW5.js";import"./CollectionBuilder-BFwWw2AW.js";import"./SelectionIndicator-Da0zjLKe.js";import"./Separator-Qwz2H95Y.js";import"./SelectionManager-BdWPcNcZ.js";import"./useEvent-kpAjV35P.js";import"./useCollator-Ac8UQMZt.js";import"./FocusScope-tc_BWGmQ.js";import"./VisuallyHidden-D-GMXsu-.js";import"./getActionGroupSlot-DqvhX6L8.js";import"./useStatic-PZIJlmDl.js";import"./context-_vxrJXzy.js";import"./FieldError-3tWBh0vH.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useFormValidation-DyJaMlWv.js";import"./useFormReset-eAh5gylf.js";import"./useSpinButton-CYH2vWjQ.js";import"./useFilter-gQpxv1F4.js";import"./useFieldComponent-c0I5eEtM.js";import"./Popover-BeKDLuBK.js";import"./useOverlayController-DeIZdXjQ.js";import"./OverlayContextProvider-Byu7izWK.js";import"./RangeCalendar-D_6bKDDz.js";import"./Heading-Delp_XvT.js";import"./useUpdateEffect-CtPNJ3Yd.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
