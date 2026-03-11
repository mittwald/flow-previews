import{r as E,j as e}from"./iframe-BLisfkW1.js";import{A as j}from"./ActionGroup-BXQPUWqY.js";import{B as f}from"./Button-BfYq4-Jl.js";import{L as t}from"./Label-C4q0QTf_.js";import{S as b}from"./Section-BpUd8Q8x.js";import{T as o}from"./TextField-D0mzryIS.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./FormRootError-D01m8GBs.js";import{s as F}from"./ActionBatch-Ba3fo7J6.js";import{F as B}from"./FieldError-ClH5zNHK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B3kpKjwM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./clsx-B-dksMZM.js";import"./index-CURFR8tK.js";import"./getActionGroupSlot-JAeF61ot.js";import"./useStatic-Cf1wupkY.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./utils-B2KexK2G.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bt2uh0Mh.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./Dialog-YGNnE7N8.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";import"./useControlledHostValueProps-ioDLOzJF.js";import"./useFieldComponent-DG2srt-t.js";import"./FieldDescription-C0N-joI8.js";import"./TextField-BR3eT1Aq.js";import"./FieldError-BmP7KZUf.js";import"./Form-mlAsayVr.js";import"./Group-PbN8ryVA.js";import"./Input-BNQv7Er9.js";import"./useTextField-Dd6gALjE.js";import"./useFormReset-fweVV-SC.js";import"./useFormValidation-BvwbNbVP.js";import"./ActionGroupView-CzzYWmgf.js";import"./Content-B4EEZXPN.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./Modal-C3_EO7YW.js";import"./useOverlayController-UaqgI9Sz.js";import"./Overlay-3FwDNFry.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./ButtonView-DQ0cot0U.js";import"./Flex-CtHT3-Wb.js";import"./useRef-DQg9ai21.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <ResetButton>Reset</ResetButton>
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
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
