import{j as e,r as x}from"./iframe-qTztDmQ9.js";import{a as c,u as l,F as p,t as j}from"./Form-_TiOEZqw.js";import{L as t}from"./Label-B_HtseH-.js";import{B as m}from"./Button-B4S912ZH.js";import{S as g}from"./Section-_3FhfXN7.js";import{A as D}from"./ActionGroup-DAaZlTM3.js";import{s as u}from"./Action-DjajA33V.js";import{J as f,h as b,L as S}from"./DateField-BEIdjVM9.js";import{D as o}from"./DateRangePicker-DzIfu54t.js";import{F as d}from"./FieldDescription-M_rJr44b.js";import{F as E}from"./useFieldComponent-DGEmXGQh.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./context-bFJEZtp8.js";import"./browser-D-RoGxAl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bo8Flsc_.js";import"./utils-CdWUsvaa.js";import"./Hidden-B1UrvXuA.js";import"./IconWarning-DPAJHOeD.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ProgressBar-BBefMTke.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dljjmf_y.js";import"./useFocus-CdJCReig.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocusable-Q1pEG0eK.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Dialog-a9xsPkPz.js";import"./RSPContexts-C3w4xSHJ.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useControlledState-tlJilXH9.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./dynamic-BKe9EJ7U.js";import"./getActionGroupSlot-CA2czWAm.js";import"./useStatic-CJuuYRzf.js";import"./context-Cf3mID_7.js";import"./Form-D5uPTAwc.js";import"./Group-C0OfF-as.js";import"./Input-DABpozkM.js";import"./useFormValidation-DR7MCNfC.js";import"./useFormReset-CmjicI53.js";import"./useSpinButton-BR-lK896.js";import"./useFilter-BPBDaU0P.js";import"./Popover-Cs9RVKWs.js";import"./OverlayContextProvider-g6FpQG7e.js";import"./ClearPropsContextView-UvqASDld.js";import"./ClearPropsContext-CkWIpOjD.js";import"./RangeCalendar-OMHv2_R2.js";import"./Heading-BEEVnEbY.js";import"./useUpdateEffect-DpdNR_Wg.js";import"./useMakeFocusable-CCDaBvVW.js";import"./react-children-utilities-C8dGDy-T.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,y=R("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async h=>{await u(1500),y(h)},F=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=j();return e.jsx(p,{form:F,onSubmit:r,children:e.jsxs(g,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:b(S()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(D,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return x.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...s.parameters?.docs?.source}}};const Ke=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,Ke as __namedExportsOrder,Je as default};
