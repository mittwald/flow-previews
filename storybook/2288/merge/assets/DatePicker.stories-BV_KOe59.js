import{j as r,r as j}from"./iframe-CdVpWnc8.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-CR4d1ryI.js";import{L as t}from"./Label-CQQzXuOB.js";import{B as u}from"./Button-BYd_Eo9F.js";import{S as E}from"./Section-3RcIg-Ej.js";import{A as S}from"./ActionGroup-CbgbDPIr.js";import{s as c}from"./Action-eeXzbiuZ.js";import{I as l,f as D,K as B}from"./DateInput-CKI4OEX7.js";import{D as o}from"./DatePicker-DDAfbA7m.js";import{F as g}from"./FieldError-0fRgmDO9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./useRef-DpTmSntJ.js";import"./utils-ClIic5nH.js";import"./ButtonView-TCVIqSjz.js";import"./browser-CWGq_9Zm.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./useStatic-DSoJUNwo.js";import"./context-BV7cuRYy.js";import"./FieldError-U_T6R5BY.js";import"./Form-BAj6LeSM.js";import"./Group-B1_lIqzJ.js";import"./Input-CCUGOCeS.js";import"./useFormValidation-5isdk9bY.js";import"./useFormReset-D5EHipFr.js";import"./useSpinButton-BUGyI61e.js";import"./useFilter-4wB85Nlv.js";import"./useFieldComponent-pH8UQhzW.js";import"./Popover-CKAofXvl.js";import"./useOverlayController-BFg7GYyz.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./RangeCalendar-DFdJCN-J.js";import"./Heading-BFrSNe6W.js";import"./useUpdateEffect-DRnNRSVj.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
