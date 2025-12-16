import{j as r,r as g}from"./iframe-B9O3ZODG.js";import{u as d,F as p}from"./Form-BITB_N9N.js";import{L as t}from"./Label-B_yUo08w.js";import{F as c,t as D}from"./Field-C1mLbov2.js";import{B as u}from"./Button-_bqaGPGi.js";import{S as b}from"./Section-D0wO1wxm.js";import{A as S}from"./ActionGroup-Cs7TEC0c.js";import{s as l}from"./Action-BQuW1ndX.js";import{a as f,$ as R,b as E}from"./DateInput-646iK8Hk.js";import{F as m}from"./FieldDescription-Ch5HP30p.js";import{F as B}from"./FieldError-Kcym6Pi9.js";import{D as o}from"./DateRangePicker-C4nloPry.js";import{R as F}from"./ResetButton-DICAuUJI.js";import{S as h}from"./SubmitButton-DarLBIcW.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B4_YLigQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Label-CUW7vXaw.js";import"./utils-B6bG5pl_.js";import"./Hidden-1Y6zqjHd.js";import"./dynamic-18R3GcKE.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./Text-BRHICk1_.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./ContextMenuSection-Hhq7J4bP.js";import"./lib-90ocxLs-.js";import"./Dialog-DJkxmbot.js";import"./RSPContexts-_UgIwAnW.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useControlledState-C-iuwE9o.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./useStatic-q7_HxIxT.js";import"./context-DoFxq3ih.js";import"./FieldError-BrC6eHcT.js";import"./Form-BpuzTWI4.js";import"./Group-Ds4785A_.js";import"./Input-DL2ocd8r.js";import"./useFormValidation-Dlo1bwd1.js";import"./useFormReset-Cc2EXXxK.js";import"./useSpinButton-BkykOb6_.js";import"./useFilter-DIxawIn8.js";import"./IconDanger-Aj7LdC1h.js";import"./Popover-BskHErZc.js";import"./OverlayContextProvider-BV_cY-H_.js";import"./useOverlayController-DTwtMihR.js";import"./CalendarHeader-BQeUnR5n.js";import"./useUpdateEffect-SIENN-94.js";import"./IconChevronRight-Bcml9lAL.js";import"./Heading-BjnD-4Wn.js";import"./useFieldComponent-CRvrWckq.js";import"./useRef-jwi4kh1m.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),oe={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async j=>{await l(1500),y(j)},x=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(S,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(p,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ie as __namedExportsOrder,oe as default};
