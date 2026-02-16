import{r as E,j as e}from"./iframe-C5ZTNo7B.js";import{A as j}from"./ActionGroup-Dj8ge-dL.js";import{B as f}from"./Button-CTD3uiWd.js";import{L as t}from"./Label-D_0GeMuu.js";import{S as b}from"./Section-HUKpeM8o.js";import{T as o}from"./TextField-BhFNLUzV.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-BsxvTmJM.js";import{s as F}from"./ActionBatch-DQnznSVa.js";import{F as B}from"./FieldError-BDB9mSsz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bw3_nZ9y.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./clsx-B-dksMZM.js";import"./index-L0hXSSnD.js";import"./getActionGroupSlot-D914C5WA.js";import"./useStatic-yr3GM-AX.js";import"./IconWarning-Bhk_rtuP.js";import"./remote-DVpXA9eO.js";import"./Text-vc01bOb1.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./utils-BuDA3Ujk.js";import"./LoadingSpinner-DA9Opfj3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ef-k5VSc.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./useFocusable-DlWx3Zdp.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B0O-s6DP.js";import"./Dialog-n3Xabcyo.js";import"./RSPContexts-BwPNB4Pl.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./useControlledHostValueProps-C7ReQGpt.js";import"./useFieldComponent-hFC9tXxl.js";import"./FieldDescription-COkKjWuk.js";import"./TextField-DgUE_Mti.js";import"./FieldError-CU71BOGK.js";import"./Form-CMpIiu9M.js";import"./Group-DGqA1oIQ.js";import"./Input-DU4gQuZk.js";import"./useTextField-BXRdWvZ1.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./ActionGroupView-BDcHe3GE.js";import"./Content-CH2yQGd8.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./Modal-DnrTq3-t.js";import"./Overlay-DtDYWi_A.js";import"./useOverlayController-DKmEbncM.js";import"./OverlayContextProvider-CtLnis9C.js";import"./ButtonView-DEthqiLB.js";import"./Flex-CwoZU0pA.js";import"./useRef-BCHa9Y83.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
