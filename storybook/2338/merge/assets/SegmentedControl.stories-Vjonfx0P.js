import{r as F,j as r}from"./iframe-Bge_iwzq.js";import{a,u as c,F as l,R as p,S as h,t as b}from"./ResetButton-B8dyUvel.js";import{L as i}from"./Label-DsCIDP_n.js";import{B as u}from"./Button-DYq5oiR6.js";import{S}from"./Section-F6_pDsCx.js";import{A as f}from"./ActionGroup-Cm9WLYvL.js";import{s as d}from"./ActionBatch-AWhYHCSY.js";import{S as s,a as e}from"./Segment-CmFgjPH1.js";import{F as v}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./LoadingSpinner-BWNPdeXh.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Dialog-BA7SIyML.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-S8YrfSf7.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useFieldComponent-DrAtnMqi.js";import"./useMakeFocusable-D6KSzyjC.js";import"./RadioGroup-UCIo66iv.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./useFormValidation-SyV8SqLU.js";import"./useFormReset-CAOi_S_S.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Nr={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const o=async j=>{await d(5e3),y(j)},x=c({defaultValues:{user:""}}),g=b();return r.jsx(l,{form:x,onSubmit:o,children:r.jsxs(S,{children:[r.jsx(g,{name:"user",children:r.jsxs(s,{children:[r.jsx(i,{children:"Role"}),r.jsx(e,{value:"admin",children:"Admin"}),r.jsx(e,{value:"member",children:"Member"}),r.jsx(e,{value:"accountant",children:"Accountant"})]})}),r.jsxs(f,{children:[r.jsx(p,{slot:"abort",children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},t={},n={render:()=>{const o=c();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(S,{children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(i,{children:"Role"}),r.jsx(e,{value:"admin",children:"Admin"}),r.jsx(e,{value:"member",children:"Member"}),r.jsx(e,{value:"accountant",children:"Accountant"})]})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(i,{children:"Role"}),r.jsx(e,{value:"admin",children:"Admin"}),r.jsx(e,{value:"member",children:"Member"}),r.jsx(e,{value:"accountant",children:"Accountant"}),r.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const o=c();return r.jsxs(l,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(s,{children:[r.jsx(i,{children:"Role"}),r.jsx(e,{value:"admin",children:"Admin"}),r.jsx(e,{value:"member",children:"Member"}),r.jsx(e,{value:"accountant",children:"Accountant"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(f,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(p,{slot:"abort",children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
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
            <SegmentedControl>
              <Label>Role</Label>
              <Segment value="admin">Admin</Segment>
              <Segment value="member">Member</Segment>
              <Segment value="accountant">Accountant</Segment>
            </SegmentedControl>
          </Field>
          <SegmentedControl isInvalid>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </SegmentedControl>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{t as Default,n as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Nr as default};
