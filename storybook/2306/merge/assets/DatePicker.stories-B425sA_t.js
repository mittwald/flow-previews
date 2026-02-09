import{j as r,r as j}from"./iframe-BwTc9KkQ.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-DnBeQq07.js";import{L as t}from"./Label-BbbV6hPu.js";import{B as u}from"./Button-Ckvz-MCb.js";import{S as E}from"./Section-C6exBiSb.js";import{A as S}from"./ActionGroup-DFlQAehv.js";import{s as c}from"./Action-BhNW5Llg.js";import{I as l,f as D,K as B}from"./DateInput-DFWGLzO-.js";import{D as o}from"./DatePicker-HnK0PgFy.js";import{F as g}from"./FieldError-BhKB-hqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE4DvzFx.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./useRef-sbMflI1L.js";import"./utils-CBQcEIVx.js";import"./ButtonView-BIDw_mr1.js";import"./browser-vKZ8hCbx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CJeMKVhz.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useFocusable-B00zaX18.js";import"./ContextMenuSection-LW48IjXN.js";import"./Dialog-DfJHDuJ2.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./useStatic-D7wzuZGA.js";import"./context-BTkxUDR7.js";import"./FieldError-B40__s1G.js";import"./Form-CXxVDbS0.js";import"./Group-BaqfBrUe.js";import"./Input-C8bkJupR.js";import"./useFormValidation-BAeTIVc2.js";import"./useFormReset-38634gnl.js";import"./useSpinButton-AAIjW0Fe.js";import"./useFilter-H4tTmUqw.js";import"./useFieldComponent-D1bp3yFp.js";import"./Popover-BUM7xHoq.js";import"./useOverlayController-DcbIZot8.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./RangeCalendar-BEjiYUnk.js";import"./Heading-DshP_5_D.js";import"./useUpdateEffect-CPvPteWE.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
