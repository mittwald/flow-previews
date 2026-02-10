import{r as j,j as r}from"./iframe-CH-PGbIe.js";import{a,u as p,F as d,R as f,S as h,t as b}from"./ResetButton-DoGjjkHq.js";import{L as t}from"./Label-BpHmIn39.js";import{B as u}from"./Button-Dl-iCxcF.js";import{S as E}from"./Section-DpoV8RoH.js";import{A as S}from"./ActionGroup-Dg2TFsOE.js";import{s as c}from"./Action-CX67yONB.js";import{I as l,f as D,K as B}from"./DateInput-2Zx457K0.js";import{D as o}from"./DatePicker-B2_uYZ6b.js";import{F as g}from"./FieldError-9pLulNyY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYPsp9rr.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./useRef-DKmNltMK.js";import"./utils-BUbYN1U7.js";import"./ButtonView-B_eZj1aS.js";import"./browser-Bk_hun62.js";import"./Label.module-CUYTf9Jc.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./Text-DUTVzyy5.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CjXzQGxt.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./ContextMenuSection-NNPlO46F.js";import"./Dialog-LWxSnoH8.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./useControlledState-BQPo69mZ.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./SelectionManager-Cy9wSm_1.js";import"./useEvent-DmJ5-BvT.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./useStatic-DyjFLUOF.js";import"./context-BsZ7lsCx.js";import"./FieldError-PikikH1M.js";import"./Form-BPpqOWmF.js";import"./Group-D9bGLtxm.js";import"./Input-C82ooeG7.js";import"./useFormReset-DarrOQyz.js";import"./useFormValidation-CGeoBpxY.js";import"./useSpinButton-BP9DWN8Q.js";import"./useFilter-CZlLDpIC.js";import"./useFieldComponent-R38s1k2Z.js";import"./Popover-E9WcTTGu.js";import"./useOverlayController-DE9i1G--.js";import"./OverlayContextProvider-C92IYoS4.js";import"./RangeCalendar-DJ9DgqKD.js";import"./Heading-DuD4iKmL.js";import"./useUpdateEffect-WuQnpQAs.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
