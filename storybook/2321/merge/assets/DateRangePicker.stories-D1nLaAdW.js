import{r as g,j as e}from"./iframe-BYq2oLvG.js";import{a as d,u as c,F as l,R as h,S as F,t as D}from"./ResetButton-DzU46sAn.js";import{L as t}from"./Label-xDxAxXdC.js";import{B as p}from"./Button-DnTJdD84.js";import{S}from"./Section-JjbD93jy.js";import{A as b}from"./ActionGroup-Dlb7N04a.js";import{s as u}from"./ActionBatch-Bd-ykVKX.js";import{I as f,f as R,K as E}from"./DateInput-BzjSfjMc.js";import{D as o}from"./DateRangePicker-CsEhpbLu.js";import{F as m}from"./FieldDescription-rCK7g6Ew.js";import{F as B}from"./FieldError-Cq2wz6X1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bmDFV0NR.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./clsx-B-dksMZM.js";import"./index-BCX3_YU5.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./context-WfyLsYOo.js";import"./useRef-BSskHlCs.js";import"./utils-Da-bhZeG.js";import"./ButtonView-BKc5Ch31.js";import"./browser-CRRI-wfh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./Text-Df3o0vPg.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Text-BsD4qVoX.js";import"./LoadingSpinner-DIcYbI07.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk2CF5qa.js";import"./ProgressBar-BYjSEmea.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CABccGP2.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./ContextMenuSection-7fn1Gt6w.js";import"./Dialog-DIAje18X.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";import"./getActionGroupSlot-BbvszDVH.js";import"./useStatic-CVBRAdvz.js";import"./context-BgaPAiG2.js";import"./FieldError-3pauqY5q.js";import"./Form-BjhhXbaP.js";import"./Group-D2o0YYLE.js";import"./Input-2WqTMUAU.js";import"./useFormReset-COvJ3vzl.js";import"./useFormValidation-DIPf7gSr.js";import"./useSpinButton-jhuJ5oTz.js";import"./useFilter-DaaIjJol.js";import"./Popover-BI0oaFz7.js";import"./useOverlayController-CI4A0ba3.js";import"./OverlayContextProvider-BMISrNul.js";import"./RangeCalendar-LN-GmMsR.js";import"./Heading-CuMsOcSF.js";import"./useUpdateEffect-Dfg0x-xx.js";import"./useFieldComponent-C42pk4aC.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Qe=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Qe as __namedExportsOrder,Je as default};
