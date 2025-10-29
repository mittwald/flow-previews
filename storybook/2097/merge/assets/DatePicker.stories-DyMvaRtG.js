import{j as r,r as x}from"./iframe-9LT5pwxo.js";import{a as p,u as d,F as c,t as F}from"./Form-CeOANQlL.js";import{L as t}from"./Label-Cy0HO6mF.js";import{B as a}from"./Button-DgX4Ha9j.js";import{S as j}from"./Section-BblLzrvZ.js";import{A as b}from"./ActionGroup-DkE81dC5.js";import{s as l}from"./Action-CxBB9EbS.js";import{J as u,h as E,L as D}from"./DateField-jeCX-hpV.js";import{D as o}from"./DatePicker-xyfs8sGw.js";import{F as S}from"./useFieldComponent-FBKhS2uw.js";import"./index-nuYtCEEu.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./clsx-B-dksMZM.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./browser-Be7wxfSs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B9A8CQ6N.js";import"./utils-C12iYS2x.js";import"./Hidden-Dc5yMvqI.js";import"./IconWarning-BGmK8I3p.js";import"./Text-FZjxGLxv.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./ContextMenuSection-BA7OrQRH.js";import"./Dialog-CLeuoHpB.js";import"./RSPContexts-D4jozd1E.js";import"./OverlayArrow-CBGQsLGC.js";import"./useControlledState-B0dx1ah2.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./VisuallyHidden-kbtTP9xl.js";import"./dynamic-Dp02ioFc.js";import"./getActionGroupSlot-BSebOatG.js";import"./useStatic-C20s3RtG.js";import"./context-CNHQEL1v.js";import"./Form-PBwv22gS.js";import"./Group-C-8wTSfb.js";import"./Input-CuGFAjVN.js";import"./useFormValidation-gXwoIgM4.js";import"./useFormReset-DsyYy3rG.js";import"./useSpinButton-Dv0VkFOd.js";import"./useFilter-CLa0ihME.js";import"./Popover-BeAbZr2-.js";import"./OverlayContextProvider-BxKLYzMZ.js";import"./ClearPropsContextView-CturT0aU.js";import"./ClearPropsContext-BgV1DGsr.js";import"./RangeCalendar-CEr5IRYb.js";import"./Heading-BdTxNxt3.js";import"./useUpdateEffect-nf6SKuIF.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./react-children-utilities-CGBnGU1K.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Gr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
