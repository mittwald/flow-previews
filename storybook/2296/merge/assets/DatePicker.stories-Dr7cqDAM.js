import{j as r,r as j}from"./iframe-CcNHCKoB.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-QovA5GoB.js";import{L as t}from"./Label-F2VOWZsZ.js";import{B as u}from"./Button-DTuLbClr.js";import{S as E}from"./Section-C7V_cxBu.js";import{A as S}from"./ActionGroup-C0eUcCYO.js";import{s as c}from"./Action-XHgAr--T.js";import{I as l,f as D,K as B}from"./DateInput-BFG8Z0En.js";import{D as o}from"./DatePicker-D0Br-qvU.js";import{F as g}from"./FieldError-BlodrZIq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nNoo79J6.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./useRef-Cb4CGn_K.js";import"./utils-NnqZ9ZBK.js";import"./ButtonView-BSq0RN-i.js";import"./browser-C0P1LItQ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./Text-BmtlE-88.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./useStatic-BA9Xyuh5.js";import"./context-QFR9DY6D.js";import"./FieldError--IyvMZRA.js";import"./Form-DRLF_vg9.js";import"./Group-DhbZF5dU.js";import"./Input-D-KHai3o.js";import"./useFormValidation-PdvsTzHy.js";import"./useFormReset-CUbMVBNo.js";import"./useSpinButton-BnFtMIDY.js";import"./useFilter-B1JKpsJn.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./Popover-DCHOI3I3.js";import"./useOverlayController-CQ8vHMbT.js";import"./OverlayContextProvider-B8m7VzcE.js";import"./RangeCalendar-CaXV0LUH.js";import"./Heading-CN6CrwNC.js";import"./useUpdateEffect-CHp4-1e0.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
