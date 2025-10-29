import{j as e,r as x}from"./iframe-C9dYfgSf.js";import{a as c,u as l,F as p,t as j}from"./Form-BmEbV8bf.js";import{L as t}from"./Label-huPJyomh.js";import{B as m}from"./Button-RNpKkVK8.js";import{S as g}from"./Section-DQdw2BcZ.js";import{A as D}from"./ActionGroup-DjfN3Zb7.js";import{s as u}from"./Action-BrSPa5cY.js";import{J as f,h as b,L as S}from"./DateField-BZqAqTi2.js";import{D as o}from"./DateRangePicker-D_zCRdq5.js";import{F as d}from"./FieldDescription-aE3p3Nfy.js";import{F as E}from"./useFieldComponent-Br5YSvi-.js";import"./index-nuYtCEEu.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./browser-CNYhznL3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-HJzRYjqm.js";import"./utils-CO6LnGLR.js";import"./Hidden-C5ZQOCSQ.js";import"./IconWarning-fVXPK3i1.js";import"./Text-DeJ4PaiG.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./LoadingSpinner-DDIQ3dza.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CD1zJvoj.js";import"./ProgressBar-BM6quT-y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DpM9fuaR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlhdQGL7.js";import"./useFocus-xkgg1n29.js";import"./useFocusRing-29NBTIcT.js";import"./useFocusable-U5sjNWcc.js";import"./ContextMenuSection-1UGXIKfR.js";import"./Dialog-W7ChNaVu.js";import"./RSPContexts-BkJpVpLi.js";import"./OverlayArrow-CkkZdON1.js";import"./useControlledState-DlEEU1a1.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./dynamic-4HLWwwwW.js";import"./getActionGroupSlot-CRNg2W87.js";import"./useStatic-BaiCJrRH.js";import"./context-BXzGXLkM.js";import"./Form-CYcFTCJ6.js";import"./Group-DC27XkzE.js";import"./Input-B4cpKRwG.js";import"./useFormValidation-cSt72451.js";import"./useFormReset-CCon2GTP.js";import"./useSpinButton-CTMgKcdp.js";import"./useFilter-BNCZPepN.js";import"./Popover-JI_LEAD1.js";import"./OverlayContextProvider-CZ-NaAce.js";import"./ClearPropsContextView-DPeL6MiY.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./RangeCalendar-DS7-Wa5-.js";import"./Heading-D3uq54pF.js";import"./useUpdateEffect-f4AoqxxV.js";import"./useMakeFocusable-JetFJK9R.js";import"./react-children-utilities-DAjt5CEG.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,y=R("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async h=>{await u(1500),y(h)},F=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=j();return e.jsx(p,{form:F,onSubmit:r,children:e.jsxs(g,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:b(S()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(D,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return x.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
