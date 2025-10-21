import{j as e,r as x}from"./iframe-CMcq8v1f.js";import{a as c,u as l,F as p,t as j}from"./Form-DzH8G5ZK.js";import{L as t}from"./Label-BIfXBQMD.js";import{B as m}from"./Button-CRhbM7FI.js";import{S as g}from"./Section-BVe8Ycpq.js";import{A as D}from"./ActionGroup-DppP5Nb_.js";import{s as u}from"./Action-DzVfKIry.js";import{J as f,h as b,L as S}from"./DateField-DdlQDbA-.js";import{D as o}from"./DateRangePicker-5qZq32qC.js";import{F as d}from"./FieldDescription-CUyjOtFz.js";import{F as E}from"./useFieldComponent-B7IsP0qp.js";import"./index-nuYtCEEu.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./clsx-B-dksMZM.js";import"./index-Tcjlyiep.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./browser-BnbqEoZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CtMkNZ5K.js";import"./utils-B4_KO4f3.js";import"./Hidden-BSe2pCrZ.js";import"./IconWarning-pzLTBmMV.js";import"./Text-DOkc_YZA.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./ContextMenuSection-DtqQsaJ2.js";import"./Dialog-Drh022ms.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./dynamic-FUMijUiW.js";import"./getActionGroupSlot-CSYISPXH.js";import"./useStatic-CKvWQ5ch.js";import"./context-haW4s5UJ.js";import"./Form-BA9ATDJW.js";import"./Group-Cj4tB1lx.js";import"./Input-D43W09OA.js";import"./useFormValidation-C01Q1Aoq.js";import"./useFormReset-DUTu2q8R.js";import"./useSpinButton-IoOLZmd-.js";import"./useFilter-BaeRwan8.js";import"./Popover-B0yZiuHu.js";import"./useOverlayController-B6qJG6eL.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./ClearPropsContext-CU9ecYMv.js";import"./RangeCalendar-H2Mdk4dP.js";import"./Heading-CmiL6R02.js";import"./useUpdateEffect-Ff_NpgYF.js";import"./useMakeFocusable-B2ENdPIj.js";import"./react-children-utilities-CDk9z-7u.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,y=R("submit"),Ke={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async h=>{await u(1500),y(h)},F=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=j();return e.jsx(p,{form:F,onSubmit:r,children:e.jsxs(g,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:b(S()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(D,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return x.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
