import{j as r,r as j}from"./iframe-Dq6d4A4K.js";import{b as a,u as d,F as p,t as b}from"./Form-DZYuvmW-.js";import{L as t}from"./Label-B5IUeoBf.js";import{R as f,S as h}from"./ResetButton-Dr3JPadG.js";import{B as u}from"./Button-CRlV5nO0.js";import{S as E}from"./Section-BosBEo7L.js";import{A as S}from"./ActionGroup-C7CI4xmc.js";import{s as c}from"./Action-BH5FUwcy.js";import{I as l,f as D,K as B}from"./DateInput-DVMSjZQs.js";import{D as o}from"./DatePicker-4bhmnnfv.js";import{F as g}from"./FieldError-3R6U5-ci.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ex2ST8.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./clsx-B-dksMZM.js";import"./index-cJyKvq7H.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./context-Dane2eIN.js";import"./browser-DRZjKHqy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D2o2XqmC.js";import"./utils-JgkAdQlm.js";import"./Hidden-aa2iYn_Y.js";import"./useRef-QuX6RRj2.js";import"./IconWarning-CufYr70B.js";import"./remote-9zlx4mlg.js";import"./Text-0vHLnm-v.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./LoadingSpinner-C8xohBci.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJxkILn0.js";import"./ProgressBar-C4xOfrMO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BTTZyaX9.js";import"./useFocus-CdRm64Xm.js";import"./useFocusRing-HiCcztDi.js";import"./useFocusable-SW4CEV0n.js";import"./ContextMenuSection-CAGjVTCl.js";import"./Dialog-D4b1JxJ9.js";import"./RSPContexts-CrxTMHNd.js";import"./OverlayArrow-CZpwCw1e.js";import"./useControlledState-B_V0UpKw.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./useStatic-qDMUdwgV.js";import"./context-Cu2JCu7X.js";import"./FieldError-DP91cGbX.js";import"./Form-q3JpQbyd.js";import"./Group-PxlHAs9-.js";import"./Input-B-OOQ2po.js";import"./useFormValidation-wNB2SuId.js";import"./useFormReset-D6HDlpz3.js";import"./useSpinButton-CjvCtUlo.js";import"./useFilter-C7gbff_9.js";import"./useFieldComponent-lf4P9InL.js";import"./Popover-Dhm-UcrA.js";import"./useOverlayController-C30vz3f6.js";import"./OverlayContextProvider-CIowSog5.js";import"./RangeCalendar-ClRdlsTd.js";import"./Heading-jVMpSXwt.js";import"./useUpdateEffect-VxLxmLot.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
