import{j as e,r as P}from"./iframe-CwuqIU3i.js";import{a as c,u as l,F as p,t as B}from"./Form-C_LQ2LWw.js";import{L as t}from"./Label-B0BiyK3O.js";import{B as m}from"./Button-BqbqUci_.js";import{S as L}from"./Section-LUqPWyIZ.js";import{A as k}from"./ActionGroup-K4almCLG.js";import{s as u}from"./Action-Dz8VIf0X.js";import{J as f,h as O,L as V}from"./DateField-C_ohpXci.js";import{D as o}from"./DateRangePicker-DVN0IU4O.js";import{F as d}from"./FieldDescription-CJ9p1yOe.js";import{F as $}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./Form-C1wZYKgN.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./useFormValidation-DK6PIssV.js";import"./useFormReset-BLDFw02N.js";import"./useSpinButton-7iNaRQOm.js";import"./useFilter-pt2OluMQ.js";import"./Popover-D__JW8z9.js";import"./useOverlayController-B8XIYbgT.js";import"./OverlayContextProvider-97LfiWf0.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./RangeCalendar-B98QEUnp.js";import"./Heading-C5Mr4Kjc.js";import"./useUpdateEffect-DUl2t4sp.js";import"./useMakeFocusable-ChwytvWt.js";import"./react-children-utilities-BfKePjVo.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,q=_("submit"),er={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async y=>{await u(1500),q(y)},R=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return e.jsx(p,{form:R,onSubmit:r,children:e.jsxs(L,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:O(V()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(k,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return P.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx($,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,h,x;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var b,S,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const rr=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,rr as __namedExportsOrder,er as default};
