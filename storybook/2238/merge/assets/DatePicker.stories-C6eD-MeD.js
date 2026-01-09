import{j as r,r as j}from"./iframe-4vGjmvQN.js";import{b as a,u as d,F as p,t as b}from"./Form-CPjWaw5M.js";import{L as t}from"./Label-C8vmJ-_M.js";import{R as f,S as h}from"./ResetButton-Bf3yTYj7.js";import{B as u}from"./Button-Dkb2KJyV.js";import{S as E}from"./Section-csDVj14w.js";import{A as S}from"./ActionGroup-CFuf9kyv.js";import{s as c}from"./Action-DFPEzuYz.js";import{I as l,f as D,K as B}from"./DateInput-C8mFKGCx.js";import{D as o}from"./DatePicker-DhfWXe7n.js";import{F as g}from"./FieldError-ZzdG0j41.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTwyIkzY.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./clsx-B-dksMZM.js";import"./index--XKY9bK1.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./context-Cugfl_gO.js";import"./browser-BLim8y6B.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DRFrGBxg.js";import"./utils-Cb3SeWCs.js";import"./Hidden-DKOWGOBv.js";import"./useRef-CWOy_YGI.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./Text-D_m0UGXp.js";import"./EmulatedBoldText-DOuKha2y.js";import"./Text-DO-ESRpi.js";import"./LoadingSpinner-Qei33fJA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C8uGqlfr.js";import"./ProgressBar-D3BQYEeZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-SP29s-a6.js";import"./useFocus-BGpJf3EA.js";import"./useFocusRing-ctZhab72.js";import"./useFocusable-BvBcbeR1.js";import"./ContextMenuSection-uYq5CLUg.js";import"./Dialog-DWeru3ZY.js";import"./RSPContexts-BAo2RxOH.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useControlledState-wPwtFL3G.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./VisuallyHidden-C3YQx9t_.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./useStatic-CkngZPNU.js";import"./context-C_iyWBEo.js";import"./FieldError-D1JCdJnN.js";import"./Form-Bf7p1I1W.js";import"./Group-C_2eU3ro.js";import"./Input-DxBr8hxM.js";import"./useFormValidation-BrUcW_b7.js";import"./useFormReset-BZ0fN7tZ.js";import"./useSpinButton-DjJnBOG9.js";import"./useFilter-8MZGED0U.js";import"./useFieldComponent-diqFBc0H.js";import"./Popover-B7_IZjqh.js";import"./useOverlayController-D8-mco-D.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./RangeCalendar-QFPzjsuK.js";import"./Heading-D0PKdBSu.js";import"./useUpdateEffect-D4ApZw7Y.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
