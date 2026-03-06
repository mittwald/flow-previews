import{r as g,j as e}from"./iframe-DBOgS3cI.js";import{A as p}from"./ActionGroup-B1DNkudK.js";import{B as b}from"./Button-DeSyDtjE.js";import{L as o}from"./Label-DEbA9P8V.js";import{S as h}from"./Section-B03hcWHL.js";import{T as t}from"./TextField-BNdWLONv.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./ResetButton-BJEIRnrv.js";import{s as j}from"./ActionBatch-C1BOMxBF.js";import{F as E}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Daa1kuSR.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./getActionGroupSlot-BVP40Z09.js";import"./useStatic-_FEyJ1iK.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./utils-BhJeINWq.js";import"./LoadingSpinner-BMYl670W.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./Button-Dkv5VJcx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./Dialog-DyC1f_Bj.js";import"./RSPContexts-Dpo7G8Um.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./useFieldComponent-pONIfnVv.js";import"./FieldDescription-CSCgjXc1.js";import"./TextField-BdIP0Lrm.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useFormValidation-BF3CckmA.js";import"./ActionGroupView-BQ6DCC5_.js";import"./Content-DrBXQyIN.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./Modal-3YZrkyAE.js";import"./useOverlayController-CBPma3tn.js";import"./Overlay-BcCO2Gjo.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./useRef-CYQsz7t1.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
