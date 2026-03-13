import{r as g,j as e}from"./iframe-BFddea_x.js";import{A as p}from"./ActionGroup-B4CMqS7f.js";import{B as b}from"./Button-DmFob37h.js";import{L as o}from"./Label-Cyz25dCh.js";import{S as h}from"./Section-DorsmKJX.js";import{T as t}from"./TextField-C4oclEWY.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./FormRootError-DAozFL3q.js";import{s as j}from"./ActionBatch-BLAWmMpV.js";import{F as E}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useStatic-4M_8h910.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./utils-D-aZUMcZ.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C_9nT1gz.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./useFieldComponent-DrOhnKye.js";import"./FieldDescription-DqsHbSnc.js";import"./TextField-Cha2rHT2.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useFormValidation-CYvJLeFF.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),ze={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
