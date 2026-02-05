import{j as r,r as j}from"./iframe-BL1IY_6V.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-BRxvWv3x.js";import{L as t}from"./Label-8Io_X3px.js";import{B as u}from"./Button-B7zQBVb0.js";import{S as E}from"./Section-B_fcZRhb.js";import{A as S}from"./ActionGroup-CBsQTCAe.js";import{s as c}from"./Action-BftMxRJh.js";import{I as l,f as D,K as B}from"./DateInput-DMwTTCbi.js";import{D as o}from"./DatePicker-BRvo_il6.js";import{F as g}from"./FieldError-D0yWaYHs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./useRef-wA2SAyNt.js";import"./utils-GyL2rjZN.js";import"./ButtonView-DNg_Qy4d.js";import"./browser-DogRo3Wh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./useStatic-BujRUGzM.js";import"./context-Cv8xNoZb.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./Group-DzRbvT54.js";import"./Input-BFv5VDBN.js";import"./useFormValidation-DCrH4OQY.js";import"./useFormReset-C4J5P-lS.js";import"./useSpinButton-DGFan2pl.js";import"./useFilter-9QmaDZ-E.js";import"./useFieldComponent-oZ5IqIdY.js";import"./Popover-B7Z0vypa.js";import"./useOverlayController-D_GPxB6v.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./RangeCalendar-MczOshZM.js";import"./Heading-CMaaNVI7.js";import"./useUpdateEffect-T3j0Kjm-.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
