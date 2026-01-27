import{j as r,r as j}from"./iframe-COrLnxQ5.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-CkJNStvh.js";import{L as t}from"./Label-D_znJf4n.js";import{B as u}from"./Button-B5T-9t49.js";import{S as E}from"./Section-BHGdwW8g.js";import{A as S}from"./ActionGroup-BkAJhlM8.js";import{s as c}from"./Action-DL1crjzC.js";import{I as l,f as D,K as B}from"./DateInput-BB2IqSTp.js";import{D as o}from"./DatePicker-CgLk7knw.js";import{F as g}from"./FieldError-CF8bH68v.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6q-iLiJj.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./clsx-B-dksMZM.js";import"./index-C_Qn4vD5.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./useRef-r_rObu5f.js";import"./utils-VsjjISTT.js";import"./ButtonView-BaOHg3N5.js";import"./browser-_tQTAo3E.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./IconWarning-CG-OJrgb.js";import"./remote-DmDOnO_p.js";import"./Text-xUIxpGpZ.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XrgEKXm-.js";import"./ProgressBar-SUOC-8W4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYo5WNMt.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./ContextMenuSection-Beuid9XD.js";import"./Dialog-CXGseDzt.js";import"./RSPContexts-Ds5AG3kQ.js";import"./OverlayArrow-B9AznsvA.js";import"./useControlledState-B-eslxlj.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";import"./getActionGroupSlot-CizQjHpL.js";import"./useStatic-CZwWlCB5.js";import"./context-Dy8NilHt.js";import"./FieldError-Ed5Dpq4f.js";import"./Form-nqQow0mS.js";import"./Group-Bxis-9K0.js";import"./Input-CS1DBvPY.js";import"./useFormValidation-Cve5G398.js";import"./useFormReset-CUYGlILL.js";import"./useSpinButton-yKuXHNmv.js";import"./useFilter-DuOBd_Cf.js";import"./useFieldComponent-CTuZy_pY.js";import"./Popover-CaemaVhn.js";import"./useOverlayController-JMrb6iCJ.js";import"./OverlayContextProvider-BtJ2k2E0.js";import"./RangeCalendar-YCio6C-Y.js";import"./Heading-B77ZBR05.js";import"./useUpdateEffect-B9xodaow.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
