import{r as g,j as e}from"./iframe-Bge_iwzq.js";import{A as p}from"./ActionGroup-Cm9WLYvL.js";import{B as b}from"./Button-DYq5oiR6.js";import{L as o}from"./Label-DsCIDP_n.js";import{S as h}from"./Section-F6_pDsCx.js";import{T as t}from"./TextField-BGSlbhXb.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./ResetButton-B8dyUvel.js";import{s as j}from"./ActionBatch-AWhYHCSY.js";import{F as E}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useStatic-CNeEScnJ.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./utils-rhPAe061.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-S8YrfSf7.js";import"./Dialog-BA7SIyML.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./useFieldComponent-DrAtnMqi.js";import"./FieldDescription-CKLwRnm1.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./Modal-DEyfydXj.js";import"./useOverlayController-wivVBOVc.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton slot="abort">Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <TextField>
              <Label>Field</Label>
            </TextField>
          </Field>
          <TextField isInvalid>
            <Label>Field</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TextField>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
