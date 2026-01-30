import{j as r,r as j}from"./iframe-l1bkuF5f.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-Bus3ZjXK.js";import{L as t}from"./Label-DX1aPacI.js";import{B as u}from"./Button-pfxdB-3A.js";import{S as E}from"./Section-CZdVIDcK.js";import{A as S}from"./ActionGroup-Bk_92t7d.js";import{s as c}from"./Action-DCncdG_g.js";import{I as l,f as D,K as B}from"./DateInput-D_p-EiTO.js";import{D as o}from"./DatePicker-CSvzRMD8.js";import{F as g}from"./FieldError-mREW9pPY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrVBKZhY.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./useRef-rZqwvUwE.js";import"./utils-DCQYs-TM.js";import"./ButtonView-8r0sbocL.js";import"./browser-BVqvvpC_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./ContextMenuSection-ktUqVNzZ.js";import"./Dialog-DkFD9hxJ.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./VisuallyHidden-GyOwAGCf.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./useStatic-BFe86sAb.js";import"./context-DTty7kAQ.js";import"./FieldError-DlCb0goX.js";import"./Form-C3oxrYxL.js";import"./Group-DMPrUoj7.js";import"./Input-DWCi9_rf.js";import"./useFormValidation-CUmRTDZB.js";import"./useFormReset-B-5bGtDV.js";import"./useSpinButton-DbGgXPfO.js";import"./useFilter-oC6DuE5_.js";import"./useFieldComponent-C26zWsIy.js";import"./Popover-DwVIQaA1.js";import"./useOverlayController-C6j4pd50.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./RangeCalendar-CZbYCEQx.js";import"./Heading-B0CySuUv.js";import"./useUpdateEffect-COltS52U.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
