import{r as g,j as r}from"./iframe-Bge_iwzq.js";import{a as p,u as d,F as l,R as h,S as x,t as b}from"./ResetButton-B8dyUvel.js";import{L as o}from"./Label-DsCIDP_n.js";import{B as u}from"./Button-DYq5oiR6.js";import{S as f}from"./Section-F6_pDsCx.js";import{A as F}from"./ActionGroup-Cm9WLYvL.js";import{s as c}from"./ActionBatch-AWhYHCSY.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Bx2LbXol.js";import{F as y}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-S8YrfSf7.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useFieldComponent-DrAtnMqi.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./FieldDescription-CKLwRnm1.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async j=>{await c(1500),B(j)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=b();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(F,{children:[r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},n={},m={render:s=>{const e=d();return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:e,onSubmit:async()=>await c(2e3),children:r.jsxs(f,{children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(h,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <TextArea {...props}>
              <Label>Field</Label>
            </TextArea>
          </Field>
          <TextArea isInvalid>
            <Label>Field</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TextArea>
        </Section>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{n as Default,m as WithFieldError,a as WithFocus,Qr as __namedExportsOrder,Jr as default};
