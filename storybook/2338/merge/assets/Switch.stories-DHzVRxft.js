import{r as x,j as r}from"./iframe-Bge_iwzq.js";import{a as m,u as p,F as a,R as l,S as u,t as E}from"./ResetButton-B8dyUvel.js";import{B as d}from"./Button-DYq5oiR6.js";import{S as f}from"./Section-F6_pDsCx.js";import{A as h}from"./ActionGroup-Cm9WLYvL.js";import{s as c}from"./ActionBatch-AWhYHCSY.js";import{S as n}from"./Switch-DMfgKflI.js";import{F as j}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./ContextMenuSection-S8YrfSf7.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useFieldComponent-DrAtnMqi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./FieldError-Cv0VAgMN.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),kr={title:"Integrations/React Hook Form/Switch",component:m,render:()=>{const t=async S=>{await c(5e3),b(S)},o=p({defaultValues:{isEnabled:!1}}),F=E();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(f,{children:[r.jsx(F,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsxs(h,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await c(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Switch {...props}>Field1</Switch>
          </Field>
          <Switch>
            Field2
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Switch>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
