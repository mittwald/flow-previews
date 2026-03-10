import{r as E,j as r}from"./iframe-Bge_iwzq.js";import{a,u as c,F as d,R as f,S as h,t as S}from"./ResetButton-B8dyUvel.js";import{L as t}from"./Label-DsCIDP_n.js";import{B as u}from"./Button-DYq5oiR6.js";import{S as x}from"./Section-F6_pDsCx.js";import{A as F}from"./ActionGroup-Cm9WLYvL.js";import{s as l}from"./ActionBatch-AWhYHCSY.js";import{I as p,f as y,K as D}from"./DateInput-DlbpblW7.js";import{D as o}from"./DatePicker-AZluRfwE.js";import{F as B}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-S8YrfSf7.js";import"./getActionGroupSlot-DLRBpctv.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./useSpinButton-enwZH7VM.js";import"./useFilter-Cdd3kYxR.js";import"./useFieldComponent-DrAtnMqi.js";import"./Popover-DH8uNurD.js";import"./RangeCalendar-BrWLdppr.js";import"./useUpdateEffect-iWhykU2_.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=g("submit"),Xr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async b=>{await l(1500),P(b)},j=c({defaultValues:{dateDefaultValue:p("2025-09-01")}}),i=S();return r.jsx(d,{form:j,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:y(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(F,{children:[r.jsx(f,{slot:"abort",children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=c({defaultValues:{field:p("2025-09-01")}});return E.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:e,onSubmit:async()=>await l(2e3),children:r.jsxs(x,{children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const e=c({defaultValues:{field:p("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(f,{slot:"abort",children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
            <DatePicker>
              <Label>Text</Label>
            </DatePicker>
          </Field>
          <DatePicker isInvalid>
            <Label>Text</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </DatePicker>
        </Section>
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
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Zr as __namedExportsOrder,Xr as default};
