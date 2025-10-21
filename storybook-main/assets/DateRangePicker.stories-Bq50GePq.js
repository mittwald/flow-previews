import{j as e,r as x}from"./iframe-DALqHAyB.js";import{a as c,u as l,F as p,t as j}from"./Form-DWtgofJo.js";import{L as t}from"./Label-DyIG2v27.js";import{B as m}from"./Button-BbfkfOCO.js";import{S as g}from"./Section-DauTDmMy.js";import{A as D}from"./ActionGroup-BmRr98fb.js";import{s as u}from"./Action-yEvGmIpX.js";import{J as f,h as b,L as S}from"./DateField-PEjrjeH-.js";import{D as o}from"./DateRangePicker-Da2wyr4Q.js";import{F as d}from"./FieldDescription-DA7yQQcX.js";import{F as E}from"./useFieldComponent-CuLkv2Wr.js";import"./index-nuYtCEEu.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./browser-pVqjrops.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D28Pduqa.js";import"./utils-C0MA_VWy.js";import"./Hidden-SLgE1qP8.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Dialog-bs1AaCOv.js";import"./RSPContexts-CoCveTu3.js";import"./OverlayArrow-CD30hPjT.js";import"./useControlledState-BAMCZ0BN.js";import"./Collection-BvojxhPL.js";import"./CollectionBuilder-l42sx1Ra.js";import"./SelectionIndicator-D4RzQj7G.js";import"./Separator-BdsMzjh6.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./dynamic-aVFvjRkA.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./useStatic-WJbJZsQS.js";import"./context-CWEo3fLe.js";import"./Form-DuNFHANS.js";import"./Group-Co0gZnxS.js";import"./Input-D7GaT3Mp.js";import"./useFormValidation-C14rVgab.js";import"./useFormReset-C8DxwuW7.js";import"./useSpinButton-kDhs2Dgu.js";import"./useFilter-2F4IZnJj.js";import"./Popover-CrnBVe2l.js";import"./useOverlayController-DLM_LHaF.js";import"./OverlayContextProvider-DuttmE5t.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./ClearPropsContext-frWmeUQW.js";import"./RangeCalendar-CZUDyjxS.js";import"./Heading-BEFcq9oy.js";import"./useUpdateEffect-CSBLJmZ8.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./react-children-utilities-C1NF1MDP.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,y=R("submit"),Ke={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async h=>{await u(1500),y(h)},F=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=j();return e.jsx(p,{form:F,onSubmit:r,children:e.jsxs(g,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:b(S()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(D,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return x.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ne=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,Ne as __namedExportsOrder,Ke as default};
