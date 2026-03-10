import{r as b,j as r}from"./iframe-Bge_iwzq.js";import{a as c,u as d,F as l,R as h,S as F,t as S}from"./ResetButton-B8dyUvel.js";import{L as t}from"./Label-DsCIDP_n.js";import{B as u}from"./Button-DYq5oiR6.js";import{S as x}from"./Section-F6_pDsCx.js";import{A as j}from"./ActionGroup-Cm9WLYvL.js";import{s as p}from"./ActionBatch-AWhYHCSY.js";import{I as f,f as R,K as E}from"./DateInput-DlbpblW7.js";import{D as o}from"./DateRangePicker-v29uPWDW.js";import{F as m}from"./FieldDescription-CKLwRnm1.js";import{F as y}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-S8YrfSf7.js";import"./getActionGroupSlot-DLRBpctv.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./useSpinButton-enwZH7VM.js";import"./useFilter-Cdd3kYxR.js";import"./Popover-DH8uNurD.js";import"./RangeCalendar-BrWLdppr.js";import"./useUpdateEffect-iWhykU2_.js";import"./useFieldComponent-DrAtnMqi.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,P=B("submit"),re={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const e=async D=>{await p(1500),P(D)},g=d({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=S();return r.jsx(l,{form:g,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(t,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:R(E()),children:r.jsx(t,{children:"Future date range"})})}),r.jsxs(j,{children:[r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const e=d({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:e,onSubmit:async()=>await p(2e3),children:r.jsxs(x,{children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(o,{children:[r.jsx(t,{children:"Future Date"}),r.jsx(m,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(j,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Section>
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
        </Section>
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
        <Field name="field">
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,ee as __namedExportsOrder,re as default};
